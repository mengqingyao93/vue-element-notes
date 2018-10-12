<template>
  <div>
    <el-card class="box-card">
      <div class="text item">
        <h3>路由的命名</h3>
        <span>通过命名来标识路由</span>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 20px">
      <div class="text item">
        <p>通过设置name属性来命名路由 name: 'user'</p>
        <p>要链接到一个命名路由，可以给 router-link 的 to 属性传一个对象：</p>
        <p>路由跳转可以使用name：router.push({ name: 'user', params: { userId: 123 }})</p>
        <p>路由跳转也可以使用path：router.push({ path: '/user', query: { userId: 123 }})</p>
        <p>使用path的时候会忽略掉params</p>
        <a @click="nameMore" style="color: #2121e5">更多资料</a>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'nameRouter',
  methods: {
    nameMore() {
      window.open('https://router.vuejs.org/zh/guide/essentials/named-routes.html')
    }
  }
}
</script>
