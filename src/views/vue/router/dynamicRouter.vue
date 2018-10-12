<template>
  <div class="app-container">
    <el-card class="box-card">
      <div class="text item">
        <h3>动态路由</h3>
        <span>路径相同而参数不同的路由称为动态路由</span>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 20px">
      <div class="text item">
        <p>动态路径参数 以冒号开头</p>
        <p>{ path: '/user/:id', component: User }</p>
        <p>像 /user/foo 和 /user/bar 都将映射到相同的路由。</p>
        <p>一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用</p>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 20px">
      <div slot="header" class="clearfix">
        <h3>路由参数的变化</h3>
      </div>
      <div class="text item">
        <p>提醒一下，当使用路由参数时，例如从 /user/foo 导航到 /user/bar，原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。</p>
        <p>复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化) $route 对象</p>
        <p>或者使用 2.2 中引入的 beforeRouteUpdate</p>
        <a @click="routerMore" style="color: #2121e5">更多资料</a>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'dynamicRouter',
  methods: {
    routerMore() {
      window.open('https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html')
    }
  }
}
</script>
