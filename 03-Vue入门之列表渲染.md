# Vue 列表渲染及条件渲染实战

## 条件渲染

有时候我们要根据数据的情况，决定标签是否进行显示或者有其他动作。最常见的就是，表格渲染的时候，如果表格没有数据，就显示无数据。如果有数据就显示表格数据。
Vue 帮我们提供了一个`v-if`的指令，帮助我们完成判断的模板处理。

```html
<div id="app">
  <h1 v-if="ok">Yes</h1>
  <h1 v-else>No</h1>  
</div>
<!-- 当ok为true的时候，输出： Yes， 否则输出： No -->

<script>
  var app = new Vue({
    el: '#app',
    data: {
      ok: true      // true,返回：Yes，   false=> No
    }
  });
</script>
```

`v-if`指令可以根据数据绑定的情况进行插入标签或者移除标签。
当然，如果熟悉 js 的都清楚，有 if，肯定会有 else。 Vue 提供的是 `v-else`指令。

## 列表渲染

### 基本 v-for 循环渲染标签

模板引擎都会提供循环的支持。Vue 也不例外，Vue 是提供了一个`v-for`指令。基本的用法类似于 foreach 的用法。还是看例子最直接，上代码：

```html
<div id="app">
  <table>
    <thead>
      <tr>
        <th>姓名</th>
        <th>年龄</th>
        <th>地址</th>
      </tr>
    </thead>
    <tbody>
      <!-- 每次for循环，都会创建一个tr标签。item是遍历的元素。 -->
      <tr v-for="item in UserList" >
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.address }}</td>
      </tr>
    </tbody>
  </table>
</div>
<script>
  var app = new Vue({
    el: '#app',
    data: {
     UserList: [
      {'name': 'malun', 'age': 18, 'address': '北京黑地下室'},
      {'name': 'flydragon', 'age': 22, 'address': '厦门的很多热的地方'},
      {'name': 'temp', 'age': 25, 'address': '东北松花江上'}
     ]
    }
  });
</script>
```

### Template 循环渲染多标签

上面的例子，我们演示的是 每次循环输出一个 tr 标签。如果我们希望每次循环生成两个 tr 标签呢？如果还有生成其他的标签呢？

Vue 给我们提供了 template 标签，供我们用于 v-for 循环中进行处理。

上代码喽：

```html
<ul>
  <!-- 通过template标签，可以一次循环，输出两个li标签 -->
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider"></li>
  </template>
</ul>
```

### 关于 v-for 对应的数组的更新

由于 Vue 的机制就是检测数据的变化，自动跟新 HTML。数组的变化，Vue 之检测部分函数，检测的函数执行时才会触发视图更新。这些方法如下：

- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()

## 表格显示的综合案例

下面是一个综合的案例，每秒钟往表格中添加一条数据。
本案例综合使用了 v-if 和 v-for 循环综合案例。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Vue入门之动态显示表格</title>
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
</head>
<body>
  <div id="app">
    <table>
      <thead>
        <tr>
          <th>姓名</th>
          <th>年龄</th>
          <th>地址</th>
        </tr>
      </thead>
      <!-- 如果列表有数据，直接输出表格数据，没有数据提示用户没有数据 -->
      <tbody v-if="UserList.length > 0">
        <tr v-for="item in UserList" >
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.address }}</td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr><td colspan="3">没有数据奥！</td></tr>
      </tbody>
    </table>
  </div>
  <script>
    var app = new Vue({
      el: '#app',
      data: {
       UserList: []
      }
    });

    // 每秒钟插入一条数据。
    setInterval(function () {
      app.UserList.push({'name': 'malun', 'age': 18, 'address': '北京黑地下室'});
    }, 1000);
  </script>
</body>
</html>
```

## 总结列表和条件绑定

列表的使用其实本质还是 js 的衍生使用，对于有 js 开发基础的没有什么难度。关键是多写几个案例就会详细通了。
