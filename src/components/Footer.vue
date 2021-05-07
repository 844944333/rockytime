<template>
  <footer class="footer text-center mt-5 p-5">
    <div class="row">
      <div class="col">
        <h3>社区</h3>
        <p class="mt-4">
          <a href="https://github.com/844944333/rockytime" target="_blank" class="font">GitHub</a>
        </p>
      </div>
      <div class="col">
        <h3>友情链接</h3>
        <p class="mt-4">社区1</p>
        <p>社区2</p>
        <p>社区3</p>
      </div>
    </div>
    <hr>
    <div class="bottom mt-5">
      <p>Copyright © 2021 时光 (李乃宝) Built with Vue.</p>
      <a href="http://beian.miit.gov.cn/" target="_blank">桂ICP备2021003495号</a>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer'
})
</script>

<style lang="scss" scoped>
.footer {
  min-height: 400px;
  background: #27282C;
  color: #fff;
  a {
    text-decoration: none;
    color: #DEA123;
  }
}
</style>
