<template>
  <div id="login">
    <!-- <h1>This is a login page</h1> -->
    <a class="neon-button" href="http://localhost:8888/login">
      Login
    </a>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Login',
  methods: {
    ...mapActions(['setCreds'])
  },
  computed: {
    ...mapGetters(['getCreds'])
  },
  beforeMount() {
    this.setCreds(this.$route.query);

    if (this.getCreds.access_token) {
      this.$router.push({ path: '/'})
    }
  }
}
</script>

<style scoped>
:root {
  --bgc: #1ED760;
  --clr: #0a1b10;
}

* {
  box-sizing: border-box;
}

#login {
  height: 100vh;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0; 

  display: grid;
  place-items: center;

  background-color: #001307;
  font-family: "Balsamiq Sans", cursive;
  color: #1ED760;
  padding-right: 10rem;
}

.neon-button {
  font-size: 3rem;

  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: #1ED760;
  border: .125em solid #1ED760;
  padding: .25em 1.23em;
  border-radius: .25em;

  text-shadow: 
    0 0 0.125em hsl(0 0% 100% / .3),
    0 0 .25em #1ED760;

  box-shadow: 
    inset 0 0 .5em 0 #1ED760,
    0 0 .5em 0 #1ED760;

  position: relative;

  transition: background-color .1s linear;
}

.neon-button::before {
  pointer-events: none;
  content: '';
  position: absolute;
  background-color: #1ED760;
  top: 130%;
  left: 0;
  width: 100%;
  height: 100%;

  transform: perspective(1em) rotateX(40deg) scale(1.2, .35);
  filter: blur(1em);
  opacity: 0.7;
}

.neon-button::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 2em .5em #1ED760;
  opacity: 0;
  transition: opacity .1s linear;
}

.neon-button:hover,
.neon-button:focus {
  background: #1ED760;
  color: #001307;
  text-shadow: none;
}

.neon-button:hover::before,
.neon-button:focus::before {
  opacity: 1;
}

.neon-button:hover::after,
.neon-button:focus::after {
  opacity: 1;
}

</style>