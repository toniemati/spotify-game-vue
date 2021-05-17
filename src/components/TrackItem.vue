<template>
  <div class="track-item">
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "TrackItem",
  props: ['name']
}
</script>

<style scoped>
.track-item {
  width: 40%;
  height: 100px;

  margin: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  background-color: rgb(129, 62, 85);
  font-family: "Poppins";
  cursor: pointer;
  color: #eee;
  font-weight: bold;
  letter-spacing: 1px;
  transition: background-color 0.2s ease;
}

.track-item:hover {
  background-color: rgb(148, 81, 105);
}

</style>