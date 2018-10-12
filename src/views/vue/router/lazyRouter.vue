<template>
  <div>
    <el-card class="box-card">
      <div class="text item">
        <h3>路由懒加载(按需加载)</h3>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 20px">
      <div class="text item">
        <p>随着项目越来越大，打包的js会越来越大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了</p>
        <p>1. const Foo = () => import('./Foo.vue')</p>
        <p>2. const Login = r => require.ensure([], () => r(require('../views/frame/login.vue')), 'group-iframe')</p>
        <p>1和2的效果是相同的</p>
        <p>也可以分组打包 const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')</p>
        <a @click="lazyMore" style="color: #2121e5">更多资料</a>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'lazyRouter',
  methods: {
    lazyMore() {
      window.open('https://router.vuejs.org/zh/guide/advanced/lazy-loading.html')
    }
  }
}
</script>
