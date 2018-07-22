# Vue 入门之组件化开发

组件其实就是一个拥有样式、动画、js 逻辑、HTML 结构的综合块。前端组件化确实让大的前端团队更高效的开发前端项目。而作为前端比较流行的框架之一，Vue 的组件和也做的非常彻底，而且有自己的特色。尤其是她单文件组件开发的方式更是非常方便，而且第三方工具支持也非常丰富，社区也非常活跃，第三方组件也呈井喷之势。当然学习和使用 Vue 的组件也是我们的最重要的目标。

## 全局扩展方法`Vue.extend`

Vue 提供了一个全局的 API，`Vue.extend`可以帮助我们对 Vue 实例进行扩展，扩展完了之后，就可以用此扩展对象创建新的 Vue 实例了。
类似于继承的方式。

```
语法：Vue.extend( options )

参数：

{Object} options
用法：

使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象[后面会细讲]。

data 选项是特例，需要注意 - 在 Vue.extend() 中它必须是函数
```

下面是一个官网 demo：

```html
<div id="mount-point"></div>
<script>
// 创建构造器
var Profile = Vue.extend({
  // 新的对象的模板，所有子实例都会拥有此模板
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data: function () {   // 创建的Vue实例时，data可以是Object 也可以是Function，但是在扩展
    return {            // 的时候，data必须是一个函数，而且要返回值奥。
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})
</script>


// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount('#mount-point')
// .$mount() 方法跟设置 el属性效果是一致的。

结果如下：

<p>Walter White aka Heisenberg</p>
```

综合案例代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Vue入门之extend全局方法</title>
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
</head>
<body>
  <div id="app">
  </div>
  <script>
    var myVue = Vue.extend({
      template: '<div>{{ name }} - {{ age }} - {{ mail }}</div>',
      data: function () {
        return {
          name: 'malun',
          age: '19',
          mail: 'flydragonml@gmail.com'
        };
      }
    });
    var app = new myVue({
      el: '#app'
    });
  </script>
</body>
</html>
```

## 创建组件和注册组件

当然上面的方式只是能让我们继承 Vue 实例做一些扩展的动作。看 Vue 中如何创建一个组件并注册使用。

Vue 提供了一个全局注册组件的方法：Vue.component。

```
语法： Vue.component( id, [definition] )

参数：
  {string} id    组件的名字，可以当HTML标签用，注意组件的名字都是小写，而且最好有横线和字母组合。
  {Function | Object} [definition]   组件的设置

用法：
注册或获取全局组件。注册还会自动使用给定的id设置组件的名称

// 注册组件，传入一个扩展过的构造器
Vue.component('my-component', Vue.extend({ /* ... */ }))
// 注册组件，传入一个选项对象（自动调用 Vue.extend）
Vue.component('my-component', { /* ... */ })
// 获取注册的组件（始终返回构造器）
var MyComponent = Vue.component('my-component')
```

简单 demo：

```html
<div id="example">
  <!--组件直接跟普通的标签一样的使用。-->
  <my-component></my-component>
</div>
```

```js
// 注册一个组件
Vue.component('my-component', {
  // 模板选项设置当前组件，最终输出的html模板。注意：有且只有一个根元素。
  template: '<div>A custom component!</div>'
});
// 创建根实例
new Vue({
  el: '#example'
});
```

那么我们注册一个组件自动帮我生成 label 和 radiobutton 组合。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Vue入门之extend全局方法</title>
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
</head>
<body>
  <div id="app">
    <!--组件名直接可以当标签使用。-->
    <radio-tag rid="rBas" txt="篮球" val="1"></radio-tag>

    <!--组件的属性也可以使用Vue的绑定的语法，下面是动态绑定数据给子组件-->
    <radio-tag :rid="demoId" :txt="demoText" :val="demoVal"></radio-tag>
  </div>
  <script>
    // 定义组件模板，模板必须有且只有一个根元素。
    var temp = '<div><label v-bind:for="rid">{{ txt }}</label><input :id="rid" type="radio" v-bind:value="val"></div>';
    // 注册一个全局的组件
    Vue.component('radio-tag', {       // 组件的名字不能有大写字母，跟React的曲别啊。另外组件名最好是小写字母加横线组合。
      template: temp,
      props: ['rid', 'txt', 'val'],   // 设置组件的属性有哪些，定义标签的属性一致。
      data: function () {             // 注意属性名都得是小写，不然会不认的。
        return {                      // 在组件的定义中data必须是函数，而且必须有返回值。
          age: 19,                    // 此地方的 age 和 emial都是演示，并么有有到。
          email: 'flydragonml@gmail.com'
        }
      }
    });

    // 初始化一个Vue实例
    var app = new Vue({
      el: '#app',
      data: {
        demoId: 'ft',
        demoText: '足球',
        demoVal: 2
      }
    });
  </script>
</body>
</html>
```

注意结果点

- 组件的名字都必须是小写【[其实是非必须，但是为了不麻烦就强制吧](https://cn.vuejs.org/v2/guide/components.html#组件命名约定)】！！！而且建议是小写字母和横线的组合比如： my-radiobtn
- 注册组件的时候，可以传入一个选项对象进行配置。其中`props`是设置当前组件的属性，属性也都必须小写。属性是连接父容器和子组件的桥梁。
- 注意：属性名和组件的名字都要小写啊，不然 vue 不会认的。
- 编写组件代码最好配合 Vue 的 chrome 插件：[vue-devtool](https://github.com/vuejs/vue-devtools)
- 组件可以返还自己的数据，但是必须是函数。data 必须是 Function

## 局部注册组件

全局注册组件就是使用全局 API `Vue.componet(id, {....})`就行了，当然我们有时候需要注册一个局部模块的自己用的组件。那么就可以用下面的方式了。

```js
var Child = {
  template: '<div>A custom component!</div>'
};
new Vue({
  // ...
  components: {
    // <my-component> 将只在父模板可用
    'my-component': Child
  }
});
```

## 组件的 slot

使用组件的时候，经常需要在父组件中为子组件中插入一些标签等。当然其实可以通过属性等操作，但是比较麻烦，直接写标签还是方便很多。
那么 Vue 提供了 slot 协助子组件对父容器写入的标签进行管理。

当父容器写了额外的内容时， 如果子组件恰好有一个 slot 标签，那边子容器的 slot 标签会被父容器写入的内容替换掉。

比如下面的例子：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Vue入门之extend全局方法</title>
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
</head>
<body>
  <div id="app">
    <!--父容器输入标签-->
    <my-slot>
      <h3>这里是父容器写入的</h3>
    </my-slot>

    <!--父容器绑定数据到子容器的slot,这里的作用域是父容器的啊。-->
    <my-slot>{{ email }}</my-slot>

    <!--父容器什么都不传内容-->
    <my-slot></my-slot>
  </div>
  <script>
    // 反引号：可以定义多行字符串。
    var temp = `
      <div>
        <h1>这里是子组件</h1>
        <hr>
        <slot>slot标签会被父容器写的额外的内容替换掉，如果父容器没有写入任何东西，此标签将保留！</slot>
      </div>
    `;
    Vue.component('MySlot', {          // 如果定义的组件为MySlot，那么用组件的时候：<my-slot></my-slot>
      template: temp,
    });
    // 初始化一个Vue实例
    var app = new Vue({
      el: '#app',
      data: {
       email: 'flydragon@gmail.com'
      }
    });
  </script>
</body>
</html>
```

最终结果：

```html
<div id="app">
  <div>
    <h1>这里是子组件</h1>
    <hr>
    <h3>这里是父容器写入的</h3>
  </div>

  <div>
    <h1>这里是子组件</h1>
    <hr> flydragon@gmail.com
  </div>

  <div>
    <h1>这里是子组件</h1>
    <hr> slot标签会被父容器写的额外的内容替换掉，如果父容器没有写入任何东西，此标签将删除！
  </div>
</div>
```

## 单文件组件的使用方式介绍

通过上面我们定义组件的方式，就已经感觉很不爽了，尤其是模板的定义，而且样式怎么处理也没有很好的进行规整。
Vue 可以通过 Webpack 等第三方工具实现单文件的开发的方式。当然这里会牵扯到很多 es6 的语法、第三方工具实现前端模块化等很多知识，
我们大概看一眼指导 Vue 的组件可以直接写一个文件中，其他地方就可以直接导入这个模块了。后面做项目的时候我还会再讲一下怎么用。

```html
<template>
  <div>
    <nav class="navbar navbar-dark navbar-fixed-top">
    </nav>
     <div class="col-md-3 sidebar">
      <ul>
        <li v-for="item in list" >
          <router-link :to="{ path: item.url }">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class="container-fluid content">
      <router-view></router-view>
    </div>
    </div>
  </div>
</template>

<script>
// 这里怎么回事
import Axios from 'axios'
export default {
  name: 'app',
  components: {
  },
  data: function () {
    return {
      list: []
    }
  },
  mounted: function () {          // 挂在完成后
    this.$nextTick(function () {
      Axios.get('/api/menulist', {
        params: {
        }
      }).then(function (res) {
        this.list = res.data
      }.bind(this))
    })
  }
}
</script>

<style>
ul, li {
  list-style: none;
}
.router-link-active {
  background-color: #f6f6f6;
}

.navbar {
  height: 50px;
  background-color: #303030;
}
.content {
  margin-top: 50px;
  padding-left: 210px;
}

.sidebar {
  background-color: #f5f5f5;
  border-right: 1px solid #eee;
  width: 200px;
}

@media (min-width: 768px) {
  .sidebar {
    position: fixed;
    top: 51px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: block;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
    background-color: #f5f5f5;
    border-right: 1px solid #eee;
  }
}
</style>
```

单文件书写组件的方式必须要配合 webpack 之类的工具才行，所以这里暂时不讲解如何做，后面到项目阶段的时候再详细讲解。
不过你可以参考：[Vue 官网单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)

## 组件总结

Vue 的组件化还是做的比较彻底的。不像 Angular1.0 中的模块那么鸡肋。组件化确实让前端模块化开发更加容易实现，
Vue 的单文件开发组件的方式也是 Vue 的一大创新，也发非常好用。
