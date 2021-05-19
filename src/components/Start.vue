<template>
  <div id="start">
    <div v-if="!start" class="startBtn" @click="startMth">START</div>
    <div class="timer" v-else>{{ time }}</div>
  </div>
</template>

<script>
export default {
 name: "Start",
 data() {
   return {
     start: false,
     time: 3,
   }
 },
 methods: {
   startMth: function() {
     this.start = true;

     const intv = setInterval(() => {
       this.time--;

       if (this.time < 0) { 
         this.$emit('on-start');
         clearInterval(intv);
       }
     }, 1000)
   }
 }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

#start {
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center; 

  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);

  overflow: hidden;
}

.startBtn {
  cursor: pointer;
  font-family: 'Press Start 2P', cursive;
  font-size: 64px;
  letter-spacing: .5rem;
  margin: 5rem;
  color: #3e3e3e;
}

.timer {
  position: absolute;

  font-size: 96px;
  font-weight: bold;
  font-family: 'Orbitron', sans-serif;
  color: #3e3e3e;
  animation-name: small;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
}

@keyframes small {
  from { 
    top: 25%; 
    opacity: 0;
  } to { 
    top: 50%;
    opacity: 1
  }
}
</style>