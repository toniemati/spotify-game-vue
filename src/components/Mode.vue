<template>
  <div id="mode">
    <h1>Select Mode</h1>
    <div class="modes">
      <div class="mod" @click="selectMode(m)" v-for="(m, idx) in modes" :key="idx">{{ m }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mode",
  data() {
    return {
      modes: ['Guess the song', 'Guess the picture', 'third mode']
    }
  },
  methods: {
    selectMode: function(m) {
      this.$emit('select-mode', m);
    }
  }
}
</script>

<style scoped>
#mode {
  position:absolute;
  top: 0;
  left: 0;
  flex-direction: column;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  backdrop-filter: blur(2px);
  background-color: rgba(255,255,255, 0.1);
}

h1 {
  margin-bottom: 5rem;
}

.modes {
  width: 100%;
  
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.mod {
  width: 20%;
  padding: 2rem 1rem;
  background-color: rgb(55, 119, 55);
  border-radius: 20px;
  cursor: pointer;
  color: #eee;
  font-weight: bold;
  letter-spacing: 1px;
  transition: background-color 0.2s ease;
}

.mod:hover {
  background-color: rgb(73, 139, 73);
}
</style>