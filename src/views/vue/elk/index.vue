<template>
  <div>
    <a @click="elasticsearch" style="display: block;color:#409eff">elasticsearch</a><br>
    <a @click="logstash" style="display: block;color:#409eff">logstash</a><br>
    <a @click="kibana" style="display: block;color:#409eff">kibana</a><br>
    <a @click="elkNginx" style="display: block;color:#409eff">elkNginx</a><br>
    <span>https://www.elastic.co/downloads/elasticsearch   查看版本号</span>
  </div>
</template>
<script>
export default {
  name: 'elk',
  methods: {
    elasticsearch() {
      this.$router.push({name: 'elasticsearch'})
    },
    logstash() {
      this.$router.push({name: 'logstash'})
    },
    kibana() {
      this.$router.push({name: 'kibana'})
    },
    elkNginx() {
      this.$router.push({name: 'elkNginx'})
    }
  }
}
</script>
