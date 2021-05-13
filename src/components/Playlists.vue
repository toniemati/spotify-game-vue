<template>
  <div id="playlists">
    <div>
      <h4>Choose a playlist or paste ID:</h4>
      <input @input="settingPlaylistFromId" type="text" placeholder="here paste an playlist id">
    </div>
    <div class="playlist">
      <PlaylistItem v-for="(playlist, idx) in playlists" :key="idx" :playlist="playlist" />
    </div>
  </div>
</template>

<script>
import PlaylistItem from '../components/PlaylistItem.vue';

export default {
  name: "Playlists",
  props: ['playlists'],
  components: { PlaylistItem },
  methods: {
    settingPlaylistFromId: function(e) {
      const id = e.target.value;
      if (id.length == 22) {
        this.$emit('send-playlist-id', id)
      } 
    }
  }
}
</script>

<style scoped>
#playlists .playlist {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
</style>