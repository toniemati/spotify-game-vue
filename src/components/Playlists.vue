<template>
  <div id="playlists">
    <div class="wrapper">
      <div class="input-data">
        <input name="id" required @input="settingPlaylistFromId" type="text" autocompete="off">
        <div :class="{errUnderline: error}" class="underline"></div>
        <label :class="{errText: error}" for="id" class="label-id">
          {{ text }}
        </label>
      </div>

    </div>

    <div class="playlist">
      <PlaylistItem v-for="(playlist, idx) in playlists" :key="idx" :playlist="playlist" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PlaylistItem from '../components/PlaylistItem.vue';

export default {
  name: "Playlists",
  props: ['playlists'],
  data() {
    return {
      text: 'Click on playlist or paste an ID',
      error: false
    }
  },
  components: { PlaylistItem },
  computed: {
    ...mapGetters(['getPlaylist']),
  },
  methods: {
    settingPlaylistFromId: function(e) {
      const id = e.target.value;

      if (id.length == 0) {
        this.error = false;
        this.text = 'Click on playlist or paste an ID';
      }

      if (id.length == 22) {
        this.$emit('send-playlist-id', id)

        if (!this.getPlaylist.id) {
          this.error = true;
          this.text = 'Wrong playlist ID'
        }

      }
    }
  }
}
</script>

<style scoped>
.playlist {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.wrapper {
  margin: auto;
  width: 450px;
  background-color: #fff;
  padding: 30px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}

.wrapper .input-data {
  height: 40px;
  width: 100%;
  position: relative;
}

.wrapper .input-data input {
  margin: 20px 20px 0 0;
  /* height: 100%; */
  width: 100%;
  border: none;
  font-size: 17px;
  border-bottom: 2px solid silver;
  outline: none;
}

.input-data input:focus ~ label,
.input-data input:valid ~ label {
  transform: translateY(-20px);
  font-size: 15px;
  color: #1ED760;
}

.wrapper .input-data label {
  position: absolute;
  bottom: 10px;
  left: 0;
  color: grey;
  pointer-events: none;
  transition: all 0.3s ease;
}

.wrapper .input-data .underline {
  position: absolute;
  bottom: -4px;
  left: -52%;
  height: 2px;
  width: 103%;
}

.input-data .underline:before {
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  background-color: #1bb852;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.input-data input:focus ~ .underline:before,
.input-data input:valid ~ .underline:before {
  transform: scaleX(1)
}

.errText {
  color: red !important;
}

.errUnderline:before {
  background-color: red !important;
}
</style>