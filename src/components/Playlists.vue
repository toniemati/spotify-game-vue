<template>
  <div id="playlists">
    <ul>
      <li v-for="(playlist, id) in playlists" :key="id" >
        {{playlist.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Playlists",
  props: ['playlists']
}
</script>

<style>

</style>