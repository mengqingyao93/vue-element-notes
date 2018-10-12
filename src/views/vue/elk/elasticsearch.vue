<template>
  <div class="app-container">
    <el-card class="box-card">
      <div class="text item">
        <h3>elasticsearch</h3>
        <span>下载：wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-5.6.7.tar.gz</span>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 20px">
      <div class="text item">
        <p>解压，移动目录。配置elasticsearch.yml</p>
        <p>http.port: 9200 #设置对外服务的http端口，默认为9200。</p>
        <p>path.data: /path/to/data</p>
        <p>path.log: /path/to/log</p>
        <p>network.host: 192.168.0.1 #这个参数是用来同时设置bind_host和publish_host上面两个参数。</p>
        <p>vim /etc/sysctl.conf</p>
        <p>加入：vm.max_map_count=262144   保存后执行以下命令：sysctl -p</p>
        <p>vim /etc/security/limits.conf</p>
        <p>加入以下两行：</p>
        <p>elk hard nofile 65536</p>
        <p>elk soft nofile 65536</p>
        <p>启动时要新建用户 不要使用root启动</p>
        <p>启动：./bin/elasticsearch -d</p>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'elasticsearch'
}
</script>
