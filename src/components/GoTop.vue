<template>
  <div @click="backTop" v-if="btnFlag" class="iconfont icon-fanhuidingbu go-top"></div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'GoTop',
  setup () {
    const btnFlag = ref(false)
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    const scrollToTop = () => {
      const _scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      btnFlag.value = _scrollTop > 100
    }
    const backTop = () => {
      document.documentElement.scrollTop = document.body.scrollTop = 0
    }
    onMounted(() => {
      window.addEventListener('scroll', scrollToTop)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', scrollToTop)
    })
    return {
      backTop,
      btnFlag
    }
  }
})
</script>

<style lang="scss" scoped>
.go-top {
  position: fixed;
  bottom: 40px;
  right: 40px;
  font-size: 50px;
  color: #999;
  cursor: pointer;
  &:hover {
    color: #1AAB29;
  }
}
</style>
