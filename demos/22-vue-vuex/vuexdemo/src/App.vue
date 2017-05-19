<template>
  <div id="app">
    <TestMutations></TestMutations>
    <hr>
    <demo></demo>
    <hr>
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Demo from './components/Demo'
import TestMutations from './components/TestMutation'

export default {
  name: 'app',
  components: {
    Hello,
    Demo,
    TestMutations
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
