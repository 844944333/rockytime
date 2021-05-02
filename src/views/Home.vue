<template>
  <HomeContent></HomeContent>
  <div class="container text-center article mt-5">
    <h1 class="title-blog">
      <span class="newest-blog">最新博客</span>
      <span class="iconfont icon">&#xe838;</span>
    </h1>
  </div>
  <!-- 去文章详情页 -->
  <router-link :to="`/detail/${article.id}`" v-for="article in articles" :key="article.id">
    <HomeArticleList style="word-wrap:break-word;" :article="article"></HomeArticleList>
  </router-link>
</template>

<script lang="ts">
// import axios from 'axios'
import { defineComponent, onMounted, computed } from 'vue'
import HomeContent from '@/components/HomeContent.vue'
import HomeArticleList from '@/components/HomeArticleList.vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'Home',
  components: {
    HomeContent,
    HomeArticleList
  },
  setup () {
    const store = useStore()
    // let articles = reactive({})
    onMounted(() => {
      // console.log(3)
      store.dispatch('getNewBlog')
      // console.log(moment(1618326789706).format())
      // axios.get('/api/blog/list').then(res => {
      //   const { data } = res.data
      //   data.sort(function (a, b) {
      //     return a.createtime - b.createtime
      //   })
      //   data.map(item => {
      //     const arrDate = moment(item.createtime).format().split('T')[0]
      //     const arrTime = moment(item.createtime).format().split('T')[1].split('+')[0]
      //     item.createtime = arrDate + ' ' + arrTime
      //   })
      //   articles = data.slice(0, 5)
      //   console.log(articles)
      // })
    })
    const articles = computed(() => store.getters.getNewBlog)
    // console.log('setup', articles)
    return {
      articles
    }
  }
})
</script>

<style lang="scss" scoped>
.article {
  .title-blog {
    display: flex;
    align-content: center;
    justify-content: center;
    color: #233A57;
    .newest-blog {
      font-size: 45px;
    }
    .icon {
      margin-left: 15px;
      align-self: center;
      font-size: 32px;
      color: #006DFE;
    }
  }
}
a {
  text-decoration: none;
}
</style>
