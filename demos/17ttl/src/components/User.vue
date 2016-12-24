<template>
  <div>
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'user',     // 组件可以有自己的名字。
  data () {         // 组件的data必须是函数
    return {
      msg: '这里是User视图'
    }
  }
}
</script>

<style scoped>
h3 {
  background-color: red;
}
</style>
