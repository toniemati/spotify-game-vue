<template>
  <div id="guess-the-pictue">
    <h1>Guess the picture here yo</h1>
    <p>{{ tracks.length }}</p>
    <p>{{ diff + ' - ' + mode }}</p>
    <button @click="drawOne">elo</button>
  </div>
</template>

<script>
export default {
 name: "GuessThePicture",
 props: ['tracks', 'diff', 'mode'],
 methods: {
   drawOne: function() {
     console.log(this.tracks[6])
   }
 }
}
</script>

<style scoped>

</style>