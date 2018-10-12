<template>
  <div class="app-container">
    <el-card class="box-card">
      <div class="text item">
        <h3>vue地址栏去掉#</h3>
        <span>地址栏中存在#不美观，同时供别人调用也会出现不必要的麻烦。</span>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 20px">
      <div slot="header" class="clearfix">
        <h3>History模式</h3>
      </div>
      <div class="text item">
        <p>vue-router默认hash模式——使用URL的hash来模拟一个完整的URL于是当URL改变时页面不会重新加载。如果不想要很丑的 hash，我们可以用路由的 history 模式，这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面</p>
        <p>当你使用 history 模式时，URL 就像正常的 url，例如 http://yoursite.com/user/id，也好看！</p>
        <p>不过这种模式要玩好，还需要后台配置支持。因为我们的应用是个单页客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问 http://oursite.com/user/id 就会返回 404，这就不好看了。</p>
        <p>所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。</p>
        <h5>nginx配置</h5>
        <p>location / {</p>
        <p style="text-indent:2em">try_files $uri $uri/ /index.html;</p>
        <p>}</p>
        <h5>警告</h5>
        <p>这么做以后，你的服务器就不再返回 404 错误页面，因为对于所有路径都会返回 index.html 文件。为了避免这种情况，你应该在 Vue 应用里面覆盖所有的路由情况，然后在给出一个 404 页面。</p>
        <p>{ path: '*', redirect: '/404' }</p>
        <p>还要定义相关的404页面{ path: '/404', component: () => import('@/views/404') }</p>
        <a @click="historyMore" style="color: #2121e5">更多资料</a>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 20px">
      <div class="text item">
        <p>当使用history模式时，对于地址栏手动输入地址相当于页面刷新，如果使用动态路由那么需求重新无后台获取权限，否则将会404</p>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'historyModel',
  methods: {
    historyMore() {
      window.open('https://router.vuejs.org/zh/guide/essentials/history-mode.html')
    }
  }
}
</script>
