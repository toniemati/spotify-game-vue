<template>
  <div id="summary">
    <h1>Summary</h1>
    <p>Playlist: {{ getPlaylist.name }}</p>
    <p>Mode: {{ mode }}</p>
    <p>Difficulty: {{ difficulty }}</p>
    <p>Accuracy: {{ (points / 10) * 100 }}%</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
 name: "Summary",
 props: ['mode', 'diff', 'points'],
  computed: {
    ...mapGetters(['getPlaylist']),
    difficulty: function() {
      if (this.diff == 10000) return 'easy';
      else if (this.diff == 5000) return 'medium';
      else return 'hard';
    }
  },
}
</script>

<style scoped>

</style>