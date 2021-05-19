<template>
  <div id="game">
    <Mode v-if="!mode" @select-mode="selectMode"/>
    <Difficluty v-if="!diff && mode" @select-diff="selectDiff" />

    <div v-if="mode && diff">
      <GuessTheSong v-if="mode == 'Guess the song'" :tracks="tracks" :diff="diff" :mode="mode" />

      <p v-else-if="mode == 2">mode 2 | {{ diff }}</p>
      <p v-else-if="mode == 3">mode 3 | {{ diff }}</p>
    </div>
  </div>
</template>

<script>
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
    
  }
}
</script>

<style scoped>
</style>