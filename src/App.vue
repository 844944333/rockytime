<template>
  <div>
    <Header></Header>
    <div :style="{height: globalHeight + 'px'}"></div>
    <go-top></go-top>
    <Loading v-if="isLoading" background="rgba(0, 0, 0, .8)" text="正在加载中..."></Loading>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted, computed } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/iconfong/iconfont.css'
import 'animate.css/animate.min.css'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import GoTop from '@/components/GoTop.vue'
import Loading from '@/components/Loading.vue'
import mitt from 'mitt'
import { useStore } from 'vuex'
// 创建事件监听器
export const emitter = mitt()

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
    GoTop,
    Loading
  },
  setup () {
    const store = useStore()
    // 顶部导航栏的高度
    const globalHeight = ref()
    // 事件监听器的回调函数
    const callback = (headerHeight: any) => {
      globalHeight.value = headerHeight
    }
    // 使用 on 将回调函数添加到监听器中
    emitter.on('form-item-created', callback)
    // 在组件卸载时清除事件监听器
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
    })
    const isLoading = computed(() => store.state.loading)
    return {
      globalHeight,
      isLoading
    }
  }
})
</script>

<style>
@font-face{
  font-family: English;
  src: url("./assets/font/JetBrainsMono-Regular.ttf");
}
.font {
  font-family: English;
}
@font-face{
  font-family: Title-font;
  src: url("./assets/font/comic sans ms.ttf");
}
.title-font {
  font-family: Title-font;
}
</style>
