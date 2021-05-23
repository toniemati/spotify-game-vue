<template>
  <div id="home">
    <div v-if="user" class="user">
      <User :user="user" />
    </div>

    <div v-if="!getPlaylist.id" class="playlists">
      <div class="button" v-if="!playlists" @click="getPlaylists">Get my playlists</div>
      <Playlists @send-playlist-id="checkId" v-if="playlists" :playlists="playlists" />
    </div>

    <div v-if="getPlaylist.id">
      <div class="clearPlaylist" @click="clearPlaylist">🔙</div>
      <Game :tracks="tracks" />
    </div>
  </div>
</template>

<script>
import SpotifyWebApi from 'spotify-web-api-node';
import { mapActions, mapGetters } from 'vuex'
import User from '../components/User.vue'
import Playlists from '../components/Playlists.vue'
import Game from '../components/Game.vue';


const SPOTIFY = new SpotifyWebApi({
  clientId: '5f06c16da3c24501a81c345ccb495d22',
  clientSecret: 'ee788b00f16043f6ac5ad2749bd56e1c',
  redirectUri: 'http://localhost:8888/callback'
});

export default {
  name: 'Home',
  components: { User, Playlists, Game },
  data() {
    return {
      user: null,
      playlists: null,
      tracks: [],
    }
  },
  computed: {
    ...mapGetters(['getCreds', 'getPlaylist'])
  },
  beforeMount() {
    if (!this.getCreds.access_token) {
      this.$router.push({ path: '/login' })
    }
  },
  mounted() {
    if (this.getCreds.access_token) {
      SPOTIFY.setAccessToken(this.getCreds.access_token);

      SPOTIFY.getMe()
        .then(({ body }) => this.user = body);
    }
  },
  methods: {
    ...mapActions(['setPlaylist', 'clearPlaylist']),
    getPlaylists: function() {
      SPOTIFY.getUserPlaylists(this.user.id)
        .then(({ body }) => this.playlists = body.items);
    },
    checkId: function(id) {
      SPOTIFY.getPlaylist(id)
        .then((data) => {
          if (data.statusCode == 200) {
            this.setPlaylist(data.body)
          }
        });
    }
  },
  watch: {
    getPlaylist() {
      if (this.getPlaylist.id) {

        for (let i = 0; i < this.getPlaylist.tracks.total; i += 100) {
          SPOTIFY.getPlaylistTracks(this.getPlaylist.id, { limit: 100, offset: i})
            .then(({ body }) => {
              const { items } = body;
              items.forEach((item) => {
                if (item.track.preview_url && item.track.preview_url.length > 0) {
                  this.tracks.push(item.track)
                }
              })
            })
        }
      } else {
        this.tracks = [];
      }
    }
  }
}
</script>

<style scoped>
.clearPlaylist {
  position: absolute;
  left: 2rem;
  top: 3rem;
  cursor: pointer;
  font-size: 2rem;
}

.button {
  margin: 5rem auto;
  width: 20%;
  padding: 2rem;
  border: 5px solid #18c755;
  border-radius: 25px;
  cursor: pointer;
  background-color: #C9C9C9;
  font-size: 24px;
  letter-spacing: 2px;
  color: #18c755;
  font-weight: bold;
  transition: all .2s ease;
}

.button:hover {
  color: #333;
  background-color: #18c755;
  border: 5px solid #333;
  box-shadow: 0 0 50px 10px #118d3c;
}
</style>
