import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import register from './views/register.vue'
import About from './views/About.vue'
import lobby from './views/lobby.vue'
import admin from './views/admin.vue'
import checkout from './views/checkout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path :'/checkout',
      name : 'checkout',
      component : checkout
    },
    {
      path : '/admin',
      name : 'admin',
      component : admin
    },
    {
      path: '/register',
      name :'register',
      component : register
    },
    {
      path : '/about',
      name : 'about',
      componet : About

    },
    {
      path : '/lobby',
      name : 'lobby',
      component : lobby
    }
  ]
})
