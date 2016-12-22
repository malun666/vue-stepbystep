# Vue实例ue详解

Vue的实例是Vue框架的入口，其实也就是前端的ViewModel，它包含了页面中的业务逻辑处理、数据模型等，当然它也有自己的一系列的生命周期的事件钩子，辅助我们进行对整个Vue实例生成、编译、挂着、销毁等过程进行js控制。

## Vue实例初始化的选项配置对象详解

前面我们已经用了很多次 `new Vue({...})`的代码，而且Vue初始化的选项都已经用了`data`、`methods`、`el`、`computedd`等,估计您看到这里时，应该已经都明白了他们的作用，我们就详细讲解一下他们的使用情况。

### Vue实例的的data对象

- 介绍

Vue的实例的数据对象data 我们已经用了很多了，数据绑定离不开data里面的数据。也是Vue的核心属性。
它是Vue绑定数据到HTML标签的数据源泉，另外Vue框架会自动监视data里面的数据变化，自动更新数据到HTML标签上去。本质原理是：Vue会自动将data里面的数据进行递归抓换成getter和setter，然后就可以自动更新HTML标签了，当然用getter和setter所以老的浏览器Vue支持的不够好。

- data对象的类型：

  + 类型是Object或者Function。
  + 如果是组件对象中，data必须是Function类型。【后面学了组件后就明白了，暂时对组件先放放。】

- 实例：

```js
// 创建普通的Vue实例
var vm = new Vue({
  data: data
})

// 组件定义【后面会详细讲的】
// Vue.extend() 中 data 必须是函数
var Component = Vue.extend({
  data: function () {   //这里必须是函数！！！！
    return { a: 1 }
  }
})
```

### Vue实例的computed

- 介绍

Vue的计算属性（computed)的属性会自动混入Vue的实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。这就很强大了，再计算属性中定义的函数里面可以直接使用指向了vue实例的this，异常方便的啊。

- 类型

`{ 键：函数}`
`{ [key: string]: Function | { get: Function, set: Function } }`
当然，可以省略setter,如果省略了setter，那么值就可以是普通函数，但是必须有返回值。

- 官方的实例
```html
var vm = new Vue({
  data: { a: 1 },
  computed: {
    // 仅读取，值只须为函数
    aDouble: function () {
      return this.a * 2
    },
    // 读取和设置
    aPlus: {
      get: function () {
        return this.a + 1
      },
      set: function (v) {
        this.a = v - 1
      }
    }
  }
})
vm.aPlus   // -> 2
vm.aPlus = 3
vm.a       // -> 2
vm.aDouble // -> 4
```

### methods

- 类型: { [key: string]: Function }

- 详细:

methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 this 自动绑定为 Vue 实例。

注意，不应该使用箭头函数来定义 method 函数 (例如 plus: () => this.a++)。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.a 将是 undefined。

- 示例:

```js
var vm = new Vue({
  data: { a: 1 },
  methods: {
    plus: function () {
      this.a++
    }
  }
})
vm.plus()
vm.a // 2
```

### watch
- 类型

` { [key: string]: string | Function | Object }`

- 详细:

一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。

- 示例:

```js
var vm = new Vue({
  data: {
    a: 1,
    b: 2,
    c: 3
  },
  watch: {
    // 监控a变量变化的时候，自动执行此函数
    a: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    },
    // 深度 watcher
    c: {
      handler: function (val, oldVal) { /* ... */ },
      deep: true
    }
  }
})
vm.a = 2 // -> new: 2, old: 1
//注意，不应该使用箭头函数来定义 watcher 函数 (例如 searchQuery: newValue => this.updateAutocomplete(newValue))。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.updateAutocomplete 将是 undefined。
```

参考： 实例方法 - vm.$watch

## Vue实例实例属性、方法、事件

## Vue实例的全局配置

## Vue的全局API
