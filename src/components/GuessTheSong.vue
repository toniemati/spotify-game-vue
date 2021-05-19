<template>
  <div id="guess-the-song">

    <Start v-if="!gameIsPlaying && round == 0" @on-start="start" />
      
    <div v-if="!gameIsPlaying && round">
      <Summary :mode="mode" :diff="diff" :points="points" />
      <button @click="restart">try again</button>
    </div>

    <div v-if="gameIsPlaying" class="items">
      <TrackItem @click="checkPoint" v-for="track in fourTracks" :key="track.id" :name="track.name"/>
    </div>

    <audio ref="audioEl"></audio>
  </div>
</template>

<script>
import TrackItem from '../components/TrackItem.vue';
import Start from '../components/Start.vue';
import Summary from '../components/Summary.vue';

export default {
  name: "GuessTheSong",
  props: ['tracks', 'diff', 'mode'],
  data() {
    return {
      round: 0,
      points: 0,
      fourTracks: [],
      gameIsPlaying: false,
      timeOut: null,
      currentTrack: null
    }
  },
  methods: {
    restart: function() {
      this.round = 0;
      this.points = 0;
      this.start();
    },
    start: function() {
      this.pauseAndClearTimeout();

      this.round++;
      this.fourTracks = [];
      this.gameIsPlaying = true;

      for (let i = 0; this.fourTracks.length < 4; i++) {
        const tr = this.drawTrack();
        if (!this.fourTracks.includes(tr)) this.fourTracks.push(tr);
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
      }, this.diff)
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
      
      if (this.round < 10) this.start();
      else {
        this.gameIsPlaying = false;
        this.pauseAndClearTimeout();
      }
    }
  },
  components: { TrackItem, Start, Summary }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.startBtn {
  cursor: pointer;
  font-family: 'Press Start 2P', cursive;
  font-size: 3rem;
  letter-spacing: .5rem;
  margin: 5rem;
  color: rgb(36, 36, 102);
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