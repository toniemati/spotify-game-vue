<template>
  <div id="login">
    <h1>This is a login page</h1>
    <a href="http://localhost:8888/login">
      <button>Log in</button>
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

<style>

</style>