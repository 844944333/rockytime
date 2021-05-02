import { ref, onMounted, onUnmounted, Ref } from 'vue'

// elementRef: 待组件挂载完毕后是 DOM 元素
const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  // 是否点击的是元素外面
  const isClickOutside = ref(false)
  // e: 鼠标事件
  const handle = (e: MouseEvent) => {
    if (elementRef.value) {
      // 如果点击的对象是 elementRef 的后代
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutside.value = false
      } else {
        isClickOutside.value = true
      }
    }
  }
  // 在组件挂载完毕后给组件的 document 添加点击事件
  onMounted(() => {
    document.addEventListener('click', handle)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handle)
  })
  return isClickOutside
}

export default useClickOutside
