<template>
  <div id="app">
    <div v-show="getLogin" v-if="!getLogin">{{ $router.push({path: '/login'}) }}</div>
    <div v-show="!getLogin" v-else>{{ $router.push({path: '/'}) }}</div>
  </div>
  <router-view/>
</template>

<script>
import { mapGetters} from 'vuex'

export default {
  name: "App",
  computed: {
    ...mapGetters(['getLogin'])
  },
  beforeMount() {
    console.log('siema')
  },
  methods: {
    getHashParams: function() {
          const hashParams = {};
          let e = '';
          let r = /([^&;=]+)=?([^&;]*)/g,
              q = window.location.hash.substring(1);
          while ( e = r.exec(q)) {
             hashParams[e[1]] = decodeURIComponent(e[2]);
          }
          return hashParams;
        }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
</style>
