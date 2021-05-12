<template>
  <div id="login">
    <h1>This is a login page</h1>
    <a href="http://localhost:8888/login">
      <button>Log in</button>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    login: function() {
      console.log('trying to log in...')
      this.$router.push({ path: 'http://localhost:8888/login'})
    }
  }


}
</script>

<style>

</style>