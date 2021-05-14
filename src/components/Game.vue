<template>
  <div id="game">
    <p class="startBtn" @click="start">🍔</p>
    <audio ref="audioEl"></audio>
    <p v-for="(t, idx) in fourTracks" :key="idx">{{ t }}</p>
  </div>
</template>

<script>
export default {
  name: "Game",
  props: ['tracks'],
  data() {
    return {
      fourTracks: [],
    }
  },
  methods: {
    start: function() {
      this.fourTracks = [];

      for (let i = 0; i < 4; i++) {
        let idx = Math.floor(Math.random() * (this.tracks.length - 0 + 1)) + 0;
        if (this.tracks[idx]) {
          this.fourTracks.push(this.tracks[idx].name)
        } else {
          return;
        }
      }
    }
  }
}
</script>

<style scoped>
.startBtn {
  cursor: pointer;
  font-size: 2rem;
}
</style>