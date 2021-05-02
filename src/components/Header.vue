<template>
  <div
    class="container-fluid d-flex fixed-top justify-content-between px-0 flex-shrink-0 border-bottom"
    style="background: #fff; z-index: 999"
    ref="headerHeight"
  >
    <router-link :to="'/'">
      <ul class="list-inline">
        <li class="list-inline-item">
          <img src="../assets/-father.jpg" class="logo" alt="">
        </li>
        <li class="list-inline-item title">
          {{ timeLight.title }}
        </li>
      </ul>
    </router-link>
    <ul class="list-inline">
      <li class="list-inline-item mr-30">
        <Dropdown>
          <!-- 替换 Dropdown 组件里的名为 default_slot 的插槽里的内容 -->
          <template #default_slot>
            <router-link to="/" class="btn btn-primary my-2 font">Home</router-link>
          </template>
        </Dropdown>
      </li>
      <li class="list-inline-item mr-30">
        <Dropdown>
          <!-- 替换 Dropdown 组件里的名为 default_slot 的插槽里的内容 -->
          <template #default_slot>
            <router-link to="/category" class="btn btn-primary my-2 font">Category</router-link>
          </template>
        </Dropdown>
      </li>
      <li class="list-inline-item mr-30">
        <Dropdown>
          <DropdownItem>
            <p style="color: #fff" class="dropdown-item" @click="clickDropdownItem">44</p>
          </DropdownItem>
          <DropdownItem>
            <p style="color: #fff" class="dropdown-item">55</p>
          </DropdownItem>
          <DropdownItem>
            <p style="color: #fff" class="dropdown-item">66</p>
          </DropdownItem>
        </Dropdown>
      </li>
      <!--<li class="list-inline-item mr-30">
        <Dropdown>
          <template #default_slot>
            <router-link to="/about" class="btn btn-primary my-2 font">Life</router-link>
          </template>
        </Dropdown>
      </li>-->
      <li class="list-inline-item mr-30">
        <Dropdown>
          <template #default_slot>
            <router-link to="/about" class="btn btn-primary my-2 font">About</router-link>
          </template>
        </Dropdown>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import Dropdown from '@/components/Dropdown.vue'
import DropdownItem from '@/components/DropdownItem.vue'
import { emitter } from '@/App.vue'
export interface TimeLight {
  logo: string;
  title: string;
}
export default defineComponent({
  name: 'Header',
  components: {
    Dropdown,
    DropdownItem
  },
  setup () {
    const headerHeight: any = ref<null | HTMLElement>(null)
    const clickDropdownItem = () => {
      alert('未开发！！！\n敬请期待！！！')
    }
    onMounted(() => {
      headerHeight.value = headerHeight.value.offsetHeight
      emitter.emit('form-item-created', headerHeight.value)
    })
    const timeLight = reactive<TimeLight>({
      logo: '../assets/logo.png',
      title: '时光<前端/>工程师'
    })
    return {
      timeLight,
      headerHeight,
      clickDropdownItem
    }
  }
})
</script>

<style scoped lang="scss">
.dropdown-item {
  text-align: center;
  background: rgba(255, 255, 255, .1);
  &:hover {
    background: rgba(255, 255, 255, .5);
    color: #eeeeee;
    cursor: pointer;
  }
}
.list-inline {
  display: flex;
  align-content: center;
  padding: 15px 0 0 15px;
}
a {
  text-decoration: none;
}
.logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.title {
  align-self: center;
  margin-left: 20px;
  font-size: 18px;
  font-weight: 500;
  color: #006DFE;
}
.mr-30 {
  margin-right: 30px;
}
</style>
