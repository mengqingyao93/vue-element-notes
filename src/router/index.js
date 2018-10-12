import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', name: 'homepage', component: () => import(/* webpackChunkName:'404' */ '@/views/homepage') },
    { path: '/404', name: 'name', component: () => import(/* webpackChunkName:'404' */ '@/views/404') }
  ]
})

export const asyncRouterMap = [
  {
    path: '/router',
    name: 'router',
    component: () => import(/* webpackChunkName:'router' */ '@/views/vue/router')
  },
  {
    // 动态路由
    path: '/router/dynamicRouter',
    name: 'dynamicRouter',
    component: () => import(/* webpackChunkName:'router' */ '@/views/vue/router/dynamicRouter')
  },
  {
    path: '/router/historyModel',
    name: 'historyModel',
    component: () => import(/* webpackChunkName:'router' */ '@/views/vue/router/historyModel')
  },
  {
    // 路由懒加载
    path: '/router/lazyRouter',
    name: 'lazyRouter',
    component: () => import(/* webpackChunkName:'router' */ '@/views/vue/router/lazyRouter')
  },
  {
    // 命名路由
    path: '/router/nameRouter',
    name: 'nameRouter',
    component: () => import(/* webpackChunkName:'router' */ '@/views/vue/router/nameRouter')
  },
  {
    // 路由传参
    path: '/router/params',
    name: 'params',
    component: () => import(/* webpackChunkName:'router' */ '@/views/vue/router/params')
  },
  {
    // elk
    path: '/elk',
    name: 'elk',
    component: () => import(/* webpackChunkName:'router' */ '@/views/vue/elk')
  },
  {
    // elasticsearch
    path: '/elk/elasticsearch',
    name: 'elasticsearch',
    component: () => import(/* webpackChunkName:'router' */ '@/views/vue/elk/elasticsearch')
  },
  {
    // logstash
    path: '/elk/logstash',
    name: 'logstash',
    component: () => import(/* webpackChunkName:'router' */ '@/views/vue/elk/logstash')
  },
  {
    // kibana
    path: '/elk/kibana',
    name: 'kibana',
    component: () => import(/* webpackChunkName:'router' */ '@/views/vue/elk/kibana')
  },
  {
    // kibana
    path: '/elk/elkNginx',
    name: 'elkNginx',
    component: () => import(/* webpackChunkName:'router' */ '@/views/vue/elk/elkNginx')
  },
  { path: '*', redirect: '/404' }
]
