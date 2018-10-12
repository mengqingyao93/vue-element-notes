<template>
  <div>
    <el-card class="box-card">
      <div class="text item">
        <h3>路由传参</h3>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 20px">
      <div class="text item">
        <span>name传参</span>
        <p>router.push({ name: 'user', params: { userId: 123 }})</p>
        <p>router.push({ name: 'user', query: { userId: 123 }})</p>
        <p>name通过路由的命名来跳转，同时可以使用params和query传递参数</p>
        <p>相应的用什么传参就用什么接受</p>
        <p>router.push({ name: 'user', params: { userId: 123 }})，this.$route.params</p>
        <p>router.push({ name: 'user', query: { userId: 123 }})，this.$route.query</p>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 20px">
      <div class="text item">
        <span>path传参</span>
        <p>router.push({ path: '/user', query: { userId: 123 }})</p>
        <p>path只能使用query传参，因为path会忽略掉params属性</p>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 20px">
      <div class="text item">
        <span>路径传参</span>
        <p>例如：https://www.baidu.com?name=mqy</p>
        <p>这种传参必须使用this.$route.query获取参数</p>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'params'
}
</script>
