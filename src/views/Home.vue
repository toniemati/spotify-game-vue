<template>
  <div id="home">
    <div v-if="user" class="user">
      <User :user="user" />
    </div>

    <div v-if="getPlaylist.id">Jest wybrana playlista {{ getPlaylist.name }}</div>

    <div class="playlists">
      <Playlists @send-playlist-id="checkId" v-if="playlists" :playlists="playlists" />
      <button v-if="!playlists" @click="getPlaylists">get playlists</button>
    </div>
  </div>
</template>

<script>
import SpotifyWebApi from 'spotify-web-api-node';
import User from '../components/User.vue'
import Playlists from '../components/Playlists.vue'
import { mapActions, mapGetters } from 'vuex'


const SPOTIFY = new SpotifyWebApi({
  clientId: '5f06c16da3c24501a81c345ccb495d22',
  clientSecret: 'ee788b00f16043f6ac5ad2749bd56e1c',
  redirectUri: 'http://localhost:8888/callback'
});

export default {
  name: 'Home',
  components: { User, Playlists },
  data() {
    return {
      user: null,
      playlists: null,
    }
  },
  computed: {
    ...mapGetters(['getCreds', 'getPlaylist'])
  },
  beforeMount() {
    if (!this.getCreds.access_token) {
      this.$router.push({ path: '/login' })
    }
    SPOTIFY.setAccessToken(this.getCreds.access_token);
  },
  mounted() {
    SPOTIFY.getMe()
      .then(({ body }) => this.user = body);
  },
  methods: {
    ...mapActions(['setPlaylist']),
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
  }
}
</script>
