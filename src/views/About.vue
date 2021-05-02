<template>
  <div class="main mt-4" :style="{height: Height + 'px'}">
    <span class="iconfont">&#xea0a;</span>
    关于我
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'About'
})
</script>

<style scoped>
.main {
  word-wrap:break-word;
  word-break: break-all;
  padding: 20px 200px 10px 200px;
}
</style>
