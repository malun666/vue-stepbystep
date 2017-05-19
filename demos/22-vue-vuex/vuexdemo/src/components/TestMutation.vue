<template>
  <div class="hello">
    <hr>
    <h3>:mutations苹果的数量是：{{aCount}}</h3>
    <button @click="addCount(2)">添加苹果</button>
    <button @click="removeCount(1)">减少苹果</button>
    <hr>
    <input type="text" v-model="appleNum">
    <button @click="myAddApple">运算苹果</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'test mutations',
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
    ...mapMutations([
      'addCount',
      'removeCount'
    ]),
    myAddApple: function () {
      this.$store.commit('addCount', +this.appleNum)
    }
  }
}
</script>

<style scoped>

</style>
