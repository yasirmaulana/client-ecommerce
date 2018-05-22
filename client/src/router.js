import Vue from 'vue'
import Router from 'vue-router'
import Item from './views/Item.vue'
import Admin from './views/Admin.vue'
import Cart from './views/Cart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'item',
      component: Item
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },

  ]
})
