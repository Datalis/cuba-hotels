<template>
  <div id="app">
    <CubaMap msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import CubaMap from './components/CubaMap.vue'

export default {
  name: 'app',
  components: {
    CubaMap
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
