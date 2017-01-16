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
      <p>{{ Temp.name }} $ {{ Temp.age }} $ {{ Temp.birthday|dateFilter }}</p>
    <hr>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import DataFilter from './filters/DateFilter.js'

var dt = new Date()

export default {
  name: 'app',
  filters: {
    dateFilter: DataFilter.chineseFormatFilter
  },
  data: function () {
    return {
      menuList: [
        { name: '首页', url: '/home' },
        { name: '用户', url: '/user/19' },
        { name: '产品', url: '/product/20' }
      ],
      Temp: {
        name: 'malun',
        age: 18,
        birthday: dt
      }
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
