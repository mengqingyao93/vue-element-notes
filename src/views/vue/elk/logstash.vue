<template>
  <div class="app-container">
    <el-card class="box-card">
      <div class="text item">
        <h3>logstash</h3>
        <span>下载：wget https://artifacts.elastic.co/downloads/logstash/logstash-5.6.7.tar.gz</span>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 20px">
      <div class="text item">
        <p>解压，移动目录。配置logstash.yml</p>
        <p>xpack.monitoring.enabled: false #否则会认证错误,如果有需要可自行开启。</p>
        <p>添加配置,在config文件夹下面新建一个conf.d文件夹,所有的输入输出配置存放在这个下面</p>
        <p>vi logback.conf</p>
        <p>input { tcp { port => 4560 codec => "json" } }</p>
        <p>output { elasticsearch { action => "index" hosts => ["172.17.149.30:9200"] index => "logstash-%{type}-%{+YYYY.MM.dd}" }}</p>
        <p>启动：nohup ./bin/logstash -f ./config/conf.d &;</p>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'logstash'
}
</script>
