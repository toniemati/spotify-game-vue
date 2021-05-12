<template>
  <div id="user">
    <div class="pic">
      <img :src="user.images[0].url" alt="avatar">
    </div>
    <div>
      <h4>{{ user.display_name }}</h4>
    </div>

  </div>
</template>

<script>
export default {
  name: "User",
  props: ['user']
}
</script>

<style>
.pic img {
  border-radius: 50%;
  height: 100px;
}
</style>