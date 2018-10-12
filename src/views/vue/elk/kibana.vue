<template>
  <div class="app-container">
    <el-card class="box-card">
      <div class="text item">
        <h3>kibana</h3>
        <span>下载：wget https://artifacts.elastic.co/downloads/kibana/logstash-5.6.7.tar.gz</span>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 20px">
      <div class="text item">
        <p>解压，移动目录</p>
        <p>修改配置文件
server.port: 5601
server.host: "10.20.9.85"
server.basePath: ""
#前面安装的elasticsearch地址
elasticsearch.url: “http://10.20.9.85:9200”
运行命令
nohup ./bin/kibana &; #后台启动
在浏览器中访问http://ip:5601</p>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'kibana'
}
</script>
