import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/index'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage,
      name: 'IndexPage'
    }
  ]
})
