# Vue 路由详解

> 对于前端来说，其实浏览器配合超级连接就很好的实现了路由功能。但是对于单页面应用来说，浏览器和超级连接的跳转方式已经不能适用，
> 所以各大框架纷纷给出了单页面应用的解决路由跳转的方案。

> Vue 框架的兼容性非常好，可以很好的跟其他第三方的路由框架进行结合。当然官方也给出了路由的方案： `vue-router`;
> 建议还是用官方的最好，使用量也是最大，相对来说 Vue 框架的升级路由组件升级也会及时跟上，所以为了以后的维护和升级方便还是使用 Vue 自家的东西最好。

## Vue-router 的版本对应

> 注意: vue-router@2.x 只适用于 Vue 2.x 版本。
> vue-router@1.x 对应于 Vue1.x 版本。

- 的 Github 地址：[vue-router](https://github.com/vuejs/vue-router)
- [文档地址](https://router.vuejs.org/zh-cn/)

## vue-router 的安装使用

- CDN 连接方式

`https://unpkg.com/vue-router/dist/vue-router.js`

- npm 安装

```shell
npm install vue-router
```

## vue-router 入门 demo

vue-router 开发的步骤：

- 第一步： 引入 vue 和 vue-router 包。
  > 可以使用 cdn 的方式或者 npm 的方式。如果配合 npm 和 webpack 的话可以直接作为一个模块导入即可。但是作为初学入门的话建议还是
  > 直接使用 cdn 包的形式，先学会怎么用路由。

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
```

- 第二步： 定义路由跳转的组件

```js
// 1. 定义（路由）组件。
const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };
```

- 第三步： 定义路由规则对象

```js
// 每个路由path应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
];

// 创建路由对象
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes，es6的新语法
});
```

- 第四步： 创建 Vue 对象，并加重上面创建的路由对象

```js
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app');
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

## 使用 vue-router 的综合实例

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

## 路由参数获取

定义路由路径的时候，可以指定参数。参数需要通过路径进行标识：`/user/:id`就是定义了一个规则，/user 开头，然后后面的就是 id 参数的值。
比如：

```
路由规则：  /user/:id
/user/9   =>  id = 9
/user/8   =>  id = 8
/user/1   =>  id = 1
```

然后在跳转后的 vue 中可以通过`this.$route.params.参数名`获取对应的参数。
比如代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Vue入门之extend全局方法</title>
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
</head>

<body>
  <div id="app">
    <nav>
      <router-link to="/user/9">用户</router-link>
      <router-link to="/stu/malun">学生</router-link>
      <hr>
    </nav>
    <router-view></router-view>
  </div>
  <script>
    var user = {
      template: `
        <div>user id is : {{ $route.params.id }}</div>
      `
    };

    var stu = {
      template: `
        <div>
          <h2>{{ getName }}</h2>
        </div>
      `,
      computed: {
        getName: function () {
          return this.$route.params.name;
        }
      }
    };
    var router = new VueRouter({
      routes: [
        { path: '/user/:id', component: user },
        { path: '/stu/:name', component: stu }
      ]
    });
    var app = new Vue({
      el: '#app',
      router: router
    });
  </script>
</body>
</html>
```

## js 控制路由跳转

上面我们演示的都是通过 router-link 进行跳转。 其实我们还可以通过 js 编程的方式进行路由的跳转。

```js
// 当前路由的view跳转到 /home
router.push('home');

// 对象,  跳转到/home
router.push({ path: 'home' });

// 命名的路由
router.push({ name: 'user', params: { userId: 123 } });

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' } });
```

## 嵌套路由

嵌套路由跟普通路由基本没有什么区别。但是可以让 vue 开发变的非常灵活。
官网这块写的也非常好，我就直接拷贝了（原谅我吧。）
实际生活中的应用界面，通常由多层嵌套的组件组合而成。同样地，URL 中各段动态路径也按某种结构对应嵌套的各层组件，例如：

```
/user/foo/profile                     /user/foo/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
借助 vue-router，使用嵌套路由配置，就可以很简单地表达这种关系。
```

```html
<div id="app">
  <router-view></router-view>
</div>
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}

const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User }
  ]
})
这里的 <router-view> 是最顶层的出口，渲染最高级路由匹配到的组件。同样地，一个被渲染组件同样可以包含自己的嵌套 <router-view>。例如，在 User 组件的模板添加一个 <router-view>：

const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}
要在嵌套的出口中渲染组件，需要在 VueRouter 的参数中使用 children 配置：

const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})
```

要注意，以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。
你会发现，children 配置就是像 routes 配置一样的路由配置数组，所以呢，你可以嵌套多层路由。

此时，基于上面的配置，当你访问 /user/foo 时，User 的出口是不会渲染任何东西，这是因为没有匹配到合适的子路由。如果你想要渲染点什么，可以提供一个 空的 子路由：

```js
const router = new VueRouter({
  routes: [
    {
      path: '/user/:id',
      component: User,
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        { path: '', component: UserHome }

        // ...其他子路由
      ]
    }
  ]
});
```

## 总结

其实作为入门的话，暂时先掌握这些知识，后续
