<template>
<teleport to="#loader">
  <div
    class="d-flex justify-content-center align-items-center h-100 loading-container"
    :style="{backgroundColor: background || ''}"
  >
    <div class="loading-content">
      <div class="spinner-border text-primary" role="status">
        <!--        <span class="sr-only">{{ text || 'loading' }}</span>-->
      </div>
      <p v-if="text" class="text-primary small text">{{text}}</p>
    </div>
  </div>
</teleport>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'

export default defineComponent({
  name: 'Loading',
  props: {
    text: {
      type: String
    },
    background: {
      type: String
    }
  },
  setup () {
    const node = document.createElement('div')
    node.id = 'loader'
    document.body.appendChild(node)
    onUnmounted(() => {
      document.body.removeChild(node)
    })
  }
})
</script>

<style lang="scss" scoped>
.loading-container {
  background: rgba(255, 255, 255, .5);
  z-index: 1000;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.loading-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .text {
    color: #303846;
    font-weight: bold;
    margin-top: 10px;
  }
}
</style>
