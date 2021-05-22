<template>
  <div @click="setPlaylist(playlist)" class="playlist-item">
    <img :src="playlist.images[0].url" alt="playlist-image">

    <div class="stats">
      <p>{{ playlist.name }}</p>
      <h5>{{ playlist.tracks.total }} songs</h5>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "PlaylistItem",
  props: ['playlist'],
  methods: {
    ...mapActions(['setPlaylist'])
  }
}
</script>

<style scoped>
.playlist-item {
  border-radius: 10px;
  margin: .5rem 1rem;
  padding: 1rem;
  width: 15%;
  background-color: #efefef;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: box-shadow 0.2s ease-in-out;
}

.playlist-item:hover {
  box-shadow: 2px 2px 20px 2px #555;
  cursor: pointer;
}

img {
  border-radius: 20px;
  width: 100%;
}
</style>