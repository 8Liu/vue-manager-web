import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/layout/home'
import sliderPath from './sliderPath'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: sliderPath
    }
  ]
})
