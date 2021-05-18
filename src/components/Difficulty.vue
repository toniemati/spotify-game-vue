<template>
  <div id="difficulty">
    <h1>Select Difficulty</h1>
    <div class="diffs">
      <div class="diff" @click="selectDiff(d)" v-for="(d, idx) in diffs" :key="idx">{{ d }}</div>
    </div>
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

<style scoped>
#difficulty {
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

.diffs {
  width: 100%;
  
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.diff {
  width: 20%;
  padding: 2rem 1rem;
  background-color: rgb(55, 55, 121);
  border-radius: 20px;
  cursor: pointer;
  color: #eee;
  font-weight: bold;
  letter-spacing: 1px;
  transition: background-color 0.2s ease;
}

.diff:hover {
  background-color: rgb(71, 71, 143);
}
</style>