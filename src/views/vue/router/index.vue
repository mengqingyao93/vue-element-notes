<template>
  <div>
    <a @click="dynamicRouter" style="display: block;color:#409eff">动态路由</a><br>
    <a @click="historyModel" style="display: block;color:#409eff">history模式</a><br>
    <a @click="lazyRouter" style="display: block;color:#409eff">懒加载</a><br>
    <a @click="nameRouter" style="display: block;color:#409eff">路由命名</a><br>
    <a @click="params" style="display: block;color:#409eff">跳转参数</a><br>
  </div>
</template>
<script>
export default {
  name: 'router',
  methods: {
    dynamicRouter() {
      this.$router.push('/router/dynamicRouter')
    },
    historyModel() {
      this.$router.push('/router/historyModel')
    },
    lazyRouter() {
      this.$router.push('/router/lazyRouter')
    },
    nameRouter() {
      this.$router.push('/router/nameRouter')
    },
    params() {
      this.$router.push('/router/params')
    }
  }
}
</script>
