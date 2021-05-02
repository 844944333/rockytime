<template>
  <div :style="{minHeight: Height + 'px'}">
    <div class="container main">
      <div class="header text-center mt-3">
        <h1>{{ article.title }}</h1>
        <p class="info">
          <span class="iconfont icon">
            &#xe608;
          </span>
          <span class="browse">{{ thumbcount }}</span>
          <span class="time">{{ article.createtime }}</span>
        </p>
        <div class="label">
          <span class="iconfont icon">&#xe65d;</span>
          <div class="tags">
            <div v-if="article.tags">
              <span class="tag">{{ article.category }}</span>
              <span v-for="(tag, index) in article.tags" :key="index" class="tag">{{ tag }}</span>
            </div>
            <span v-else class="tag">{{ article.category }}</span>
          </div>
        </div>
      </div>
      <!-- 支持 markdown 语法 -->
      <div v-html="currentHTML" class="content mt-4"></div>
<!--      <div class="content mt-4">{{currentHTML}}</div>-->
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import MarkdownIt from 'markdown-it'

export interface DetailProps {
  _id: string;
}

export default defineComponent({
  name: 'Detail',
  setup () {
    const store = useStore()
    const route = useRoute()
    const md = new MarkdownIt()
    onMounted(() => {
      const id = route.params.id
      store.dispatch('updateThumbcount', id)
      store.dispatch('getArticleDetail', id)
    })
    const article = computed(() => store.getters.getArticleDetail)
    const thumbcount = ref(computed(() => store.getters.updateThumbcount))
    const currentHTML = computed(() => {
      if (article.value && article.value.content) {
        return md.render(article.value.content)
      }
      return true
    })
    return {
      article,
      thumbcount,
      currentHTML
    }
  }
})
</script>

<style lang="scss" scoped>
.main {
  .header {
    font-weight: 600;
    .info {
      color: #006DFE;
      font-weight: 600;
      margin-top: 10px;
      .time {
        margin-left: 20px;
      }
    }
    .label {
      display: flex;
      align-content: center;
      justify-content: center;
      font-weight: 600;
      .icon {
        font-size: 20px;
        color: #DEA123;
      }
      .tags {
        .tag {
          color: #fff;
          background: #006DFE;
          border-radius: 4px;
          margin: 0px 10px;
          padding: 5px 12px;
          text-align: center;
        }
      }
    }
  }
  .content {
    word-wrap:break-word;
    word-break: break-all;
    padding: 20px 100px 10px 100px;
  }
}
</style>
