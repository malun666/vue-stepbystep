import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import User from './components/User.vue'
import Product from './components/Product.vue'

export default new VueRouter({
  routes: [
    {path: '/home', component: Home},
    {path: '/user/:id', component: User},
    {path: '/product/:id', component: Product}
  ]
})
