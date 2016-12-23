# Vue路由详解

> 对于前端来说，其实浏览器配合超级连接就很好的实现了路由功能。但是对于单页面应用来说，浏览器和超级连接的跳转方式已经不能适用，
所以各大框架纷纷给出了单页面应用的解决路由跳转的方案。 

> Vue框架的兼容性非常好，可以很好的跟其他第三方的路由框架进行结合。当然官方也给出了路由的方案： `vue-router`;
建议还是用官方的最好，使用量也是最大，相对来说Vue框架的升级路由组件升级也会及时跟上，所以为了以后的维护和升级方便还是使用Vue自家的东西最好。

## Vue-router的版本对应
> 注意: vue-router@2.x 只适用于 Vue 2.x 版本。
> vue-router@1.x 对应于Vue1.x版本。

- 的Github地址：[vue-router](https://github.com/vuejs/vue-router)   
- [文档地址](https://router.vuejs.org/zh-cn/)

## vue-router的安装使用

- CDN连接方式

`https://unpkg.com/vue-router/dist/vue-router.js`

- npm 安装

```shell
npm install vue-router
```

## vue-router 入门demo

vue-router开发的步骤：

- 第一步： 引入vue和vue-router包。
> 可以使用cdn的方式或者npm的方式。如果配合npm和webpack的话可以直接作为一个模块导入即可。但是作为初学入门的话建议还是
> 直接使用cdn包的形式，先学会怎么用路由。

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
```

- 第二步： 定义路由跳转的组件
```js
// 1. 定义（路由）组件。
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
```
- 第三步： 定义路由规则对象

```js
// 每个路由path应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 创建路由对象
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes，es6的新语法
})
```

- 第四步： 创建Vue对象，并加重上面创建的路由对象

```js
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')
```

- 第五步： 在模板中编写路由跳转链接

```html
<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</div>
```

最终的代码：

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</div>
<script>
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')
</script>
```

下面是一个综合的例子, 页面上有几个导航的按钮，然后通过点击不同的按钮，可以在当前页面切换不同的组件。

```html
<!DOCTYPE html> 
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Vue入门之extend全局方法</title>
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
  <style>
  ul, li { list-style: none; }
  ul { overflow: hidden; }
  li { float: left; width: 100px; }
  h2 { background-color: #903;}
  </style>
</head>
<body>
  <div id="app">
    <top-bar> </top-bar>
    <hr>
      <p>email to: {{ email }}</p> 
    <hr>
    <router-view class="view one"></router-view>
    <footer-bar></footer-bar>
  </div>
  <script>
    var topbarTemp = `
      <nav>
        <ul>
          <li v-for="item in NavList">
            <router-link :to="item.url">{{ item.name }}</router-link>
          </li>
        </ul>
      </nav>        
    `;
    // 定义组件：topbar
    Vue.component('top-bar', {          
      template: topbarTemp,
      data: function () {
        return {
          NavList: [
            { name: '首页', url: '/home'},
            { name: '产品', url: '/product'},
            { name: '服务', url: '/service'},
            { name: '关于', url: '/about'}
          ]
        }
      }
    });             

    Vue.component('footer-bar', {  // 定义组件 footerbar
      template: `
        <footer>
          <hr/>
          <p>版权所有@flydragon<p>
        </footer>
      `
    });

    // 创建home模块
    var home = {
      template: `<div> <h2>{{ msg }}<h2></div>`,
      data: function () {
        return { msg: 'this is home view' }
      }
    };

    // 创建product 模块
    var product = {
      template: `<div> {{ msg }}</div>`,
      data: function () {
        return { msg: 'this is product view' }
      }
    }

    // 定义路由对象
    var router = new VueRouter({
      routes: [
        { path: '/home', component: home },
        { path: '/product', component: product }
      ]
    });

    // 初始化一个Vue实例
    var app = new Vue({         
      el: '#app',               
      data: {                   
       email: 'flydragon@gmail.com'
      },
      router: router
    });
  </script>
</body>
</html>

```
