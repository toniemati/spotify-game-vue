<template>
  <div id="game">
    <div v-if="gameIsPlaying">
      <h4>round {{ round }}</h4>
      <div class="items">
        <TrackItem @click="checkPoint" v-for="track in fourTracks" :key="track.id" :name="track.name"/>
      </div>
    </div>
    <div v-else>
      <p v-if="round == 1" class="startBtn" @click="start">START</p>
      <h4 v-if="round == 10">points: {{ points }} / 10</h4>
    </div>
    <audio ref="audioEl"></audio>
  </div>
</template>

<script>
import TrackItem from '../components/TrackItem.vue';

export default {
  name: "Game",
  props: ['tracks'],
  components: { TrackItem },
  data() {
    return {
      fourTracks: [],
      currentTrack: null,
      timeOut: null,
      gameIsPlaying: false,
      round: 1,
      points: 0,
    }
  },
  methods: {
    start: function() {
      this.fourTracks = [];
      this.gameIsPlaying = true;

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
        console.log('not even try, next round')
      } else {
        //* Try
        if (this.currentTrack.name == e.target.innerText) {
          this.points++;
          console.log('+1 point')
        } else {
          console.log('next round, wrong try')
        }
      }

      this.round++;
      
      if (this.round < 10) this.start();
      else {
        this.gameIsPlaying = false;
        this.pauseAndClearTimeout();
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

.items {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  width: 60%;
}
</style>