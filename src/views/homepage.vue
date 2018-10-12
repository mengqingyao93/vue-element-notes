<template>
  <div>
    <button @click="asd">router</button><br>
    <button @click="elk">elk</button>
  </div>
</template>
<script>
export default {
  name: 'homepage',
  methods: {
    asd() {
      this.$router.push('/router')
    },
    elk() {
      this.$router.push('/elk')
    }
  }
}
</script>
