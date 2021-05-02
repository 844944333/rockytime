<template>
  <div class="container d-flex justify-content-center main" :style="{minHeight: Height + 'px'}">
    <!-- 去文章详情页 -->
      <div class="article mt-5" v-if="categoryArticles.value">
        <router-link :to="`/detail/${article.id}`" v-for="article in categoryArticles" :key="article.id">
        <div class="dots">
          <span class="mac b1"></span>
          <span class="mac b2"></span>
          <span class="mac b3"></span>
        </div>
        <div class="article-absolute">
          <div class="content">
            <img class="img" src="../assets/-father.jpg" alt="">
            <div class="article-content">
              <h1 class="title">{{ article.title }}</h1>
              <div v-html="article.content" class="desc"></div>
<!--              <div class="desc" v-html="currentHTML"></div>-->
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
              <p class="info">
              <span class="iconfont icon">
                &#xe608;
                <span class="browse">{{ article.thumbcount }}</span>
              </span>
                <span class="time">{{ article.createtime }}</span>
              </p>
            </div>
          </div>
        </div>
        </router-link>
      </div>
      <div class="no-data" v-else>
        <p class="iconfont icon-meiyoushuju" style="font-size: 60px"></p>
        该专栏还没有发布文章！！！
      </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import MarkdownIt from 'markdown-it'

export interface TagsProps {
  _id: string;
  tag: string;
}
export interface InfoProps {
  browse: string;
  time: string;
}
export interface ArticlesProps {
  _id: string;
  title: string;
  desc: string;
  tags: TagsProps[];
  info: InfoProps;
}

export default defineComponent({
  name: 'ArticleList',
  setup () {
    const route = useRoute()
    const store = useStore()
    const md = new MarkdownIt()
    onMounted(() => {
      store.dispatch('getCategoryArticles', route.params.title)
    })
    const categoryArticles = computed(() => store.getters.getCategoryArticles)
    watch(categoryArticles, () => {
      categoryArticles.value.map(item => {
        item.content = md.render(item.content)
      })
    })
    console.log('list', categoryArticles.value.length)
    // 获取路由携带过来的参数
    // console.log(route.params.title)
    return {
      categoryArticles
    }
  }
})
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  .article {
    box-shadow: 0 0 20px rgba(0, 0, 0, .1);
    border: 1px solid rgba(0, 0, 0, .1);
    position: relative;
    width: 100%;
    align-self: center;
    background: #fff;
    border-radius: 8px;
    padding: 0 15px 15px 15px;
    box-sizing: border-box;
    .dots {
      position: absolute;
      left: 15px;
      top: 12px;
      .mac {
        display: inline-block;
        margin-right: 10px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        &.b1 {
          background: #E0443E;
        }
        &.b2 {
          background: #DEA123;
        }
        &.b3 {
          background: #1AAB29;
        }
      }
    }
    .article-absolute {
      margin-top: 50px;
      .content {
        display: flex;
        .img {
          margin-right: 25px;
          flex-shrink: 0;
          width: 450px;
          height: 280px;
          border-radius: 4px;
          overflow: hidden;
        }
        .article-content {
          min-height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .title {
            color: #006DFE;
            font-family: English;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
          .desc {
            word-break: break-all;
            word-wrap:break-word;
            margin-top: 10px;
            font-size: 20px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          }
          .label {
            display: flex;
            align-content: center;
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
                &:first-child {
                  margin-left: 20px;
                }
              }
            }
          }
          .info {
            color: #006DFE;
            font-weight: 600;
            margin-top: 10px;
            .icon {
              .browse {
                margin-left: 4px;
              }
            }
            .time {
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
  .no-data {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
a {
  text-decoration: none;
}
</style>
