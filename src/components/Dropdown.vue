<template>
  <div class="dropdown" ref="elementRef">
    <slot name="default_slot">
      <a
        href="#"
        class="btn btn-primary my-2 dropdown-toggle font"
        @click.prevent="toggle"
      >Production</a>
    </slot>
    <ul class="dropdown-menu border-0 dropdown__item" style="display: block" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useClickOutside from '@/hooks/useClickOutside'

export default defineComponent({
  name: 'Dropdown',
  setup () {
    const isOpen = ref(false)
    // elementRef: 组件挂载完毕前类型是 null，组件挂载完毕后类型是 HTMLElement
    const elementRef = ref<null | HTMLElement>(null)
    const toggle = () => {
      isOpen.value = !isOpen.value
    }
    const isClickOutside = useClickOutside(elementRef)
    watch(isClickOutside, () => {
      if (isClickOutside.value && isOpen.value) {
        isOpen.value = false
      }
    })
    return {
      isOpen,
      toggle,
      elementRef
    }
  }
})
</script>

<style scoped>
.dropdown__item {
  background: #303846;
}
</style>
