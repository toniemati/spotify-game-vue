<template>
  <div id="game">
    <Mode v-if="!mode" @select-mode="selectMode"/>
    <Difficluty v-if="!diff && mode" @select-diff="selectDiff" />

    <!-- <div v-if="mode && diff && !gameIsPlaying">
      <div v-if="round == 0" class="startBtn" @click="start">START</div>
      <h2 v-if="round == 10">Accuracy: {{ (points / 10) * 100 }}%</h2>
    </div> -->


    <div v-if="mode && diff">
      <GuessTheSong v-if="mode == 'Guess the song'" />
      <p v-else-if="mode == 2">mode 2</p>
      <p v-else-if="mode == 3">mode 3</p>

      <!-- <h4>round {{ round }}</h4>
      <div class="items">
        <TrackItem @click="checkPoint" v-for="track in fourTracks" :key="track.id" :name="track.name"/>
      </div> -->
    </div>

    <!-- <audio ref="audioEl"></audio> -->
  </div>
</template>

<script>
// import TrackItem from '../components/TrackItem.vue';
import Mode from '../components/Mode.vue';
import Difficluty from '../components/Difficulty.vue';
import GuessTheSong from '../components/GuessTheSong.vue';

export default {
  name: "Game",
  props: ['tracks'],
  components: { Mode, Difficluty, GuessTheSong },
  data() {
    return {
      mode: null,
      diff: null,
      fourTracks: [],
      currentTrack: null,
      timeOut: null,
      gameIsPlaying: false,
      round: 0,
      points: 0,
    }
  },
  methods: {
    selectMode: function(l) {
      this.mode = l;
    },
    selectDiff: function(d) {
      if (d == 'easy') this.diff = 10000;
      else if (d == 'medium') this.diff = 5000;
      else this.diff = 3000;
    },
    start: function() {
      this.round++;

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
      
      if (this.round <= 9) this.start();
      else {
        this.gameIsPlaying = false;
        this.pauseAndClearTimeout();
      }
    }
  }
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