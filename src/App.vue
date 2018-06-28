<template>
  <div class="home">
    <navigation></navigation>
    <masterhead></masterhead>
    <services></services>
  </div>
</template>

<script>
// @ is an alias to /src
import navigation from '@/views/Navigation.vue'
import masterhead from '@/views/Masterhead.vue'
import services from '@/components/Services.vue'

export default {
  name: 'home',
  components: {
    navigation,
    masterhead,
    services
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
