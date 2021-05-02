<template>
  <div class="container">
    <div class="row">
      <div class="col-4 mb-4 pb-4 mt-5 main-col" v-for="item in list" :key="item._id">
        <div class="card h-100">
          <div class="card-body text-center" style="max-height: 36rem">
            <img
              :src="`${item.avatar}`"
              class="rounded-circle img-fluid border border-light my-3 rounded w-75"
            >
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-desc text-left">{{ item.desc }}</p>
            <!-- 去文章列表页 -->
            <!-- 携带分类的标题，在文章列表页发送获取该分类的文章列表的请求 -->
            <router-link :to="`/articles/${item.title}`" class="btn btn-outline-primary">进入专栏</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'

export interface ColumnsProps {
  _id: string;
  title: string;
  img: string;
  desc: string;
}

export default defineComponent({
  name: 'ColumnList',
  setup () {
    const store = useStore()
    onMounted(() => {
      store.dispatch('getCategory')
    })
    const list = computed(() => store.getters.getCategory)
    return {
      list
    }
  }
})
</script>

<style lang="scss" scoped>
.slide-hide-enter-active {
  transition: all 0.8s ease-out;
}
/* 显示时的位置变化 20px --> 0px */
.slide-hide-enter-from {
  transform: translateY(200px);
  opacity: 0;
}
.container {
  min-height: 700px;
  .main-col {
    transition: all .3s;
    .card {
      position: relative;
      padding-bottom: 35px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 0 6px rgba(0, 0, 0, .04);
      .card-title {
        max-height: 48px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .card-desc {
        max-height: 96px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
      }
      .btn {
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  .main-col:hover {
    transform: translateY(-20px);
  }
}
</style>
