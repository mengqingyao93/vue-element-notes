import router from './router'
import store from './store'
// const whiteList = ['/login']// 未登陆状态下的白名单

router.beforeEach((to, from, next) => {
  if (store.getters.user.asyncRouterMap === undefined) {
    store.dispatch('Login').then(res => {
      router.addRoutes(store.getters.user.asyncRouterMap)
    })
  }
  next()
})
