<template>
  <div id="mode">
    <h3>Select Mode</h3>
    <p @click="selectMode(m)" v-for="(m, idx) in modes" :key="idx">{{ m }}</p>
  </div>
</template>

<script>
export default {
  name: "Mode",
  data() {
    return {
      modes: ['Guess the song', 2, 3]
    }
  },
  methods: {
    selectMode: function(m) {
      this.$emit('select-mode', m);
    }
  }
}
</script>

<style>

</style>