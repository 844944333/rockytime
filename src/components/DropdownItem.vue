<template>
  <li class="dropdown-option">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DropdownItem'
})
</script>

<style scoped>

</style>
