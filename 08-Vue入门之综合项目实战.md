# Vue 综合实战项目

## 前置知识学习

- npm 学习
  - [官方文档](https://docs.npmjs.com/)
  - 推荐资料
    - [npm 入门](http://www.cnblogs.com/kelsen/p/4947859.html)
    - [npm 介绍](http://www.nodeclass.com/articles/810142)
  - 需要了解的知识点
    - `package.json` 文件相关配置选项
    - npm 本地安装、全局安装、本地开发安装等区别及相关命令
    - npm script 脚步的基本编写能力

> 有时间专门写一个这样的专题，如果需要可以邮件我。malun666@126.com

- webpack 基础学习
  - [官方文档](https://webpack.js.org/)
  - Webpack 了解的知识点：

    - webpack 的基本配置
    - 了解 webpack 常用的 loader： less-loader、sass-loader、 vue-loader、style-loader、css-loader、eslint-loader、babel-loader 等
    - 熟悉 Webpack 的 webpack-dev-server 的基本配置和使用，会配置热更新
- es6 语法学习
  - 阮一峰老师的大作[《ECMAScript 6 入门》](http://es6.ruanyifeng.com/)
  - 需要学习的知识点
    - es6 的模块机制
    - 各种最新语法糖，简写、geter、setter、箭头函数
    - 类、继承的心机制
      ...
- nodejs 基础知识

  - 知识点学习：
    - 文件操作
    - http 服务
    - express

- 组件化开发思想

## Vue 脚手架工具：`vue-cli`构建实战项目

其实如果编写 Vue 的前端项目，直接使用 vue 的官方 vue-cli 构建工具最好用，一个命令就可以直接生成项目的结构和目录。
而且官方需要依赖的包也可以自动配置好，只需要 npm instal 一下，然后就可以开发测试了。

### `vue-cli`安装

```shell
# 安装vue-cli。  安装之前首先确保你已经安装好了nodejs 而且打开命令行
$ npm install -g vue-cli

# 校验一下是否安装成功
$ vue -V

#=>  2.5.1  我当前的版本是这个，你的可能比这个新
```

### 使用`vue-cli`初始化项目

通过以下命令的方式可以创建一个项目文件夹，并初始化对应的文件。

```shell
$ vue init <template-name> <project-name>
```

其中 template-name 可以取以下值，每个值对应不同的项目构建的模板。

- [webpack](https://github.com/vuejs-templates/webpack)--全功能的 Webpack + vueify，包括热加载，静态检测，单元测试
- [webpack](https://github.com/vuejs-templates/webpack-simple)-simple--一个简易的 Webpack + vueify，以便于快速开始。
- [browserify](https://github.com/vuejs-templates/browserify)--全功能的 Browserify + vueify，包括热加载，静态检测，单元测试
- [browserify](https://github.com/vuejs-templates/browserify-simple)-simple--一个简易的 Browserify + vueify，以便于快速开始。

安装和开发控制台的命令：

```shell
# 如果已经安装，请省略
$ npm install -g vue-cli

# 初始化一个webpack全功能包的vue项目，请您把my-project换成你自己的项目名。
$ vue init webpack my-project

# 用命令行进入当前项目目录
$ cd my-project

# npm安装所有的依赖的包
$ npm install

# 运行测试的首页
$ npm run dev
```

### 综合实例开发记录

1.  通过 vue-cli 构建工具初始化项目目录

> 安装过程，控制台会问你项目名称是什么？项目描述？项目作者，是否使用 eslint 校验，是否使用单元测试等....

我的安装过程如下请参考：

```shell
$ vue init webpack ttl                        # => 安装webpack模板的项目 ttl（项目名可以随便取）

  A newer version of vue-cli is available.

  latest:    2.6.0
  installed: 2.5.1

  This will install Vue 2.x version of template.

  For Vue 1.x use: vue init webpack#1.0 ttl

? Project name mydemovue                        # => 项目名称
? Project description A Vue.js project          # => 项目描述
? Author malun <malun666@126.com>               # => 作者
? Vue build standalone                          # => 是否支持单文件组件
? Use ESLint to lint your code? Yes             # => 是否支持ESLint代码校验
? Pick an ESLint preset Standard                # => 校验的标准是什么？
? Setup unit tests with Karma + Mocha? Yes      # => 是否使用单元测试
? Setup e2e tests with Nightwatch? Yes          # => 是否使用e2e测试

   vue-cli · Generated "ttl".

   To get started:

     cd ttl
     npm install
     npm run dev

   Documentation can be found at https://vuejs-templates.github.io/webpack
```

通过上面一系列的命令后，我们就会创建一个 webpack 配置好的项目包。目录结构如下：

```shell
ttl
|--.babelrc           #=> babel的配置文件，主要用于转换es6等最新的js语法。
|--.editorconfig      #=> 编辑器配置
|--.eslintignore      #=> eslint的忽略校验的配置文件
|--.eslintrc.js       #=> eslint的配置校验js是否规范的配置文件
|--.gitignore         #=> 设置git忽略的管理的文件
|--README.md          #=> readme说明文件
|--build/             #=> 自动构建存放的文件地方
|--config/            #=> 当前开发、测试等配置的文件，需要懂点nodejs了啊。
|--index.html         #=> 项目的主入口的模板
|--package.json       #=> npm的配置文件
|--src/               #=> 源码目录
|--static/            #=> 静态资源存放的目录
|--test/              #=> 测试相关目录
```

2.  初始化依赖包

```shell
$ cd ttl              #=> 进入上面创建好的项目目录
$ npm install         #=> 安装所有的依赖包。  安装过程可能非常长，网络也可能有问题，请耐心等待。

# 安装完成后，可以直接运行测试,如果自动打开浏览器，并跳转到http://localhost:8080/ 说明一切都ok了。
$ npm run dev
```

> npm 安装的时候经常网会断开，国内的网（哎，说多了都是泪）你懂的。最好能科学上网，或者是用淘宝的 npm 的镜像

3.  安装`vue-router`组件

```shell
$ npm i -S vue-router
```

4.  到项目的 `/src/components/` 目录下创建三个组件文件。

分别是：

- 首页组件


```html
<template>
  <div class="home">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'home',     // 组件可以有自己的名字。
  data () {         // 组件的data必须是函数
    return {
      msg: '这里是Home视图'
    }
  }
}
</script>

<style scoped>
h3 {
  background-color: #82c;
}
</style>
```

- 用户首页组件


```html
<template>
  <div>
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {    // es6的模块导出定义语法，此模块导出默认的对象
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
```

- 产品组件


```html
<template>
  <div class="product">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'product',     // 组件可以有自己的名字。
  data () {         // 组件的data必须是函数
    return {
      msg: '这里是Home视图'
    }
  }
}
</script>

<style scoped>
h3 {
  background-color: green;
}
</style>
```

项目的目录结构为：

```
ttl
|-- src
|--|-- Hello.vue
|--|-- Home.vue
|--|-- Product.vue
|--|-- User.vue
```

5.  创建 router 对象及配置路由

在`src`目录下创建`approuter.js`文件。
然后添加如下代码：

```js
import VueRouter from 'vue-router'; // 导入路由模块
import Home from './components/Home.vue'; // 导入Home组件
import User from './components/User.vue';
import Product from './components/Product.vue';

export default new VueRouter({
  // 定义路由规则对象
  routes: [
    { path: '/home', component: Home },
    { path: '/user/:id', component: User },
    { path: '/product/:id', component: Product }
  ]
});
```

6.  修改 main.js 文件
    找到`src/`目录下的 main.js 文件，
    共修改 4 处，添加路由引用、添加路由规则对象导入、启用路由、将路由键入到 Vue 中。  
    修改此文件为：

```js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router'; // +++1、导入路由组件
import router from './approuter'; // +++2、导入我们自己写的路由配置文件

// +++ 3、使用路由组件
Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router // +++4、添加路由对象
});
```

7.  在 app.vue 中添加路由导航

最终代码如下：

```html
<template>
  <div id="app">
    <nav class="top-menu">
      <ul >
        <li v-for="item in menuList">
          <router-link :to="item.url">{{ item.name }}</router-link>
        </li>
      </ul>
    </nav>
    <hr>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      menuList: [
        { name: '首页', url: '/home' },
        { name: '用户', url: '/user/19' },
        { name: '产品', url: '/product/20' }
      ]
    }
  }
}
</script>

<style>
#app {

}
.top-menu ul, .top-menu li {
  list-style: none;
}
.top-menu {
  overflow: hidden;
}
.top-menu li {
  float: left;
  width: 100px;
}
</style>
```

刷新一下浏览器，你将会看到最终的运行结果。

# 总结

Vue 的入门系列基本都写完了，大部分内容是参考了官网的文档。

还有很多内容没有整理到这个系列中。比如：vue 的过渡动画，vue 的异步刷新队列，vue 的过滤器等，我相信你通过本文档就能
实现 vue 的入门了，那些琐碎的知识点只要看一下官方的文档应该很容入门。

这一次整理过程，让我对 Vue 有了更深入的认识，之前不熟悉的东西，强迫自己把
文档写一遍后，认识比以前更清晰了。Vue 确实带来很多的惊喜。希望这个文档对你有用。
