import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: function (resolve) {
        require.ensure([], function (require) {
          resolve(require('@/components/Home/Home'))
        })
      }
    }
  ]
})
