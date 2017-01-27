<template>
  <div class="hello">
    <p>苹果的数量是：{{aCount}}</p>
    <button @click="addApple(2)">添加苹果</button>
    <button @click="removeApple(1)">减少苹果</button>
    <hr>
    <input type="text" v-model="appleNum">
    <button @click="myAddApple">减少苹果</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'demo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      appleNum: 0
    }
  },
  computed: {
    ...mapState({
      aCount: state => state.appleCount
    }),
    getMsg: function () {
      return this.msg.toLower()
    }
  },
  methods: {
    ...mapActions([
      'addApple',
      'removeApple'
    ]),
    myAddApple: function () {
      this.$store.dispatch('addApple', +this.appleNum)
    }
  }
}
</script>

<style scoped>

</style>
