<template>
  <div id="game">
    <p class="startBtn" @click="start">🍔</p>
    <audio ref="audioEl"></audio>
    <p @click="checkPoint" v-for="track in fourTracks" :key="track.id">{{ track.name }}</p>
    <audio ref="audioEl"></audio>
  </div>
</template>

<script>
export default {
  name: "Game",
  props: ['tracks'],
  data() {
    return {
      fourTracks: [],
      currentTrack: null,
      timeOut: null
    }
  },
  methods: {
    start: function() {
      this.fourTracks = [];

      for (let i = 0; this.fourTracks.length < 4; i++) {
        const tr = this.drawTrack();

        if (!this.fourTracks.includes(tr)) {
          this.fourTracks.push(tr);
        }
      }
      this.selectOneAndPlay();
    },
    drawTrack: function() {
      let idx = Math.floor(Math.random() * (this.tracks.length - 0)) + 0;
      let tr = this.tracks[idx];
      return tr;
    },
    selectOneAndPlay: function() {
      this.pauseAndClearTimeout();

      let idx = Math.floor(Math.random() * (this.fourTracks.length - 0)) + 0;
      this.currentTrack = this.fourTracks[idx];
      
      this.$refs.audioEl.src = this.currentTrack.preview_url;
      this.$refs.audioEl.volume = 0.2;
      this.$refs.audioEl.play();

      this.timeOut = setTimeout(() => {
        this.checkPoint(false)
      }, 5000)
    },
    pauseAndClearTimeout: function() {
      if (!this.$refs.audioEl.paused) this.$refs.audioEl.pause();
      if (this.timeOut) clearTimeout(this.timeOut);
      this.timeOut = null;
      this.currentTrack = null;

    },
    checkPoint: function(e) {
      if (!e) {
        //* Not even trying
      } else {
        //* Try
        if (this.currentTrack.name == e.target.innerText) {
          console.log('+1 point')
        } else {
          console.log('next round, wrong try')
        }
      }
      
      this.pauseAndClearTimeout();
      this.start();
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