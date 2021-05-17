<template>
  <div id="difficulty">
    <h3>Select Difficulty</h3>
    <p @click="selectDiff(d)" v-for="(d, idx) in diffs" :key="idx">{{ d }}</p>
  </div>
</template>

<script>
export default {
  name: 'Difficulty',
  data() {
    return {
      diffs: ['easy', 'medium', 'hard']
    }
  },
  methods: {
    selectDiff: function(d) {
      this.$emit('select-diff', d)
    }
  }
}
</script>

<style>

</style>