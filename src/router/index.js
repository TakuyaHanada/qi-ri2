import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import New from '../components/New'
import Settings from '../components/Settings'
import Install from '../components/Install'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/new',
      name: 'new',
      component: New
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/install',
      name: 'install',
      component: Install
    }
  ]
})
