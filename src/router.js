import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
