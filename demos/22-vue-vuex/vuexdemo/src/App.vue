<template>
  <div id="app">
    <demo></demo>
    <hr>
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Demo from './components/Demo'

export default {
  name: 'app',
  components: {
    Hello,
    Demo
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
