<template>
  <div id="home">
    <h1>This is a home page</h1>
    <h3>Login:</h3> {{getLogin}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// @ is an alias to /src

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['getLogin'])
  }

}
</script>
