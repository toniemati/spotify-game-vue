<template>
  <div id="summary">
    <h1>Summary</h1>
    <table>
      <tr>
        <td>Playlist:</td>
        <td>{{ getPlaylist.name }}</td>
      </tr>
      <tr>
        <td>Mode:</td>
        <td>{{ mode }}</td>
      </tr>
      <tr>
        <td>Difficulty:</td>
        <td>{{ difficulty }}</td>
      </tr>
      <tr>
        <td>Accuracy:</td>
        <td>{{ (points / 10) * 100 }}%</td>
      </tr>
    </table>
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
table {
  margin: 2rem auto;
  text-align: start;
  border-collapse: collapse;
}

tr {
  background-color: #eee;
  cursor: default;
}

tr:hover {
  background-color: rgb(224, 224, 224);
}

td {
  padding: 2rem;
}

td:nth-child(2) {
  text-align: end;
}

tr:first-child
td:nth-child(2) {
  border-top-right-radius: 20px;
}

tr:first-child
td:nth-child(1) {
  border-top-left-radius: 20px;
}

tr:last-child
td:nth-child(1) {
  border-bottom-left-radius: 20px;
}

tr:last-child
td:nth-child(2) {
  border-bottom-right-radius: 20px;
}
</style>