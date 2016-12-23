# Vue综合实战项目

## 前置知识学习
- npm 学习
  + [官方文档](https://docs.npmjs.com/)
  + 推荐资料
    * [npm入门](http://www.cnblogs.com/kelsen/p/4947859.html)
    * [npm介绍](http://www.nodeclass.com/articles/810142)
  + 需要了解的知识点
    * `package.json` 文件相关配置选项
    * npm 本地安装、全局安装、本地开发安装等区别及相关命令
    * npm script脚步的基本编写能力

> 有时间专门写一个这样的专题，如果需要可以邮件我。malun666@126.com

- webpack基础学习
  + [官方文档](https://webpack.js.org/)
  + Webpack了解的知识点： 
    * webpack的基本配置
    * 了解webpack常用的loader： less-loader、sass-loader、 vue-loader、style-loader、css-loader、eslint-loader、babel-loader等
    * 熟悉Webpack的webpack-dev-server的基本配置和使用，会配置热更新
    
- es6语法学习
  + 阮一峰老师的大作[《ECMAScript 6 入门》](http://es6.ruanyifeng.com/)
  + 需要学习的知识点
    * es6的模块机制
    * 各种最新语法糖，简写、geter、setter、箭头函数
    * 类、继承的心机制
    ...
- nodejs基础知识
  + 知识点学习：
    * 文件操作
    * http服务
    * express

- 组件化开发思想

## Vue脚手架工具：`vue-cli`构建实战项目

其实如果编写Vue的前端项目，直接使用vue的官方vue-cli构建工具最好用，一个命令就可以直接生成项目的结构和目录。
而且官方需要依赖的包也可以自动配置好，只需要npm instal一下，然后就可以开发测试了。

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
其中template-name可以取以下值，每个值对应不同的项目构建的模板。
- [webpack](https://github.com/vuejs-templates/webpack)--全功能的Webpack + vueify，包括热加载，静态检测，单元测试
- [webpack](https://github.com/vuejs-templates/webpack-simple)-simple--一个简易的Webpack + vueify，以便于快速开始。
- [browserify](https://github.com/vuejs-templates/browserify)--全功能的Browserify + vueify，包括热加载，静态检测，单元测试
- [browserify](https://github.com/vuejs-templates/browserify-simple)-simple--一个简易的Browserify + vueify，以便于快速开始。

例如：

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


安装过程，控制台会问你项目名称是什么？项目描述？项目作者，是否使用eslint校验，是否使用单元测试等....
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

通过上面一系列的命令后，我们就会创建一个webpack配置好的项目包。目录结构如下：

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

### 综合实例


## 从无到有自己搭建Webpack配置Vue全项目构建过程

## Vue综合实战项目结构

