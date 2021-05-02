import { createStore, Commit } from 'vuex'
import axios, { AxiosRequestConfig } from 'axios'
import { sortAndFormat } from '@/utils/sortAndFormat'
import moment from 'moment/moment'

const asyncAndCommit = async (url: string, mutationName: string, commit: Commit, config: AxiosRequestConfig = { method: 'get' }) => {
  const { data } = await axios(url, config)
  commit(mutationName, data)
  return data
}

const store = createStore({
  state: {
    loading: false,
    // 首页的 5 条博客
    articles: [],
    // 博客的分类
    category: [],
    // 某一分类的博客
    categoryArticles: [],
    // 文章详情
    articleDetail: {},
    // 更新浏览量
    updateThumbcount: 0
  },
  // 发送异步请求
  actions: {
    // 获取最新博客
    getNewBlog ({ commit }) {
      return asyncAndCommit('/api/blog/list', 'getNewBlog', commit)
    },
    // 获取分类列表
    getCategory ({ commit }) {
      return asyncAndCommit('/api/blog/category', 'getCategory', commit)
    },
    // 获取某一分类的博客
    getCategoryArticles ({ commit }, title: string) {
      return asyncAndCommit(`/api/blog/category/list?name=${title}`, 'getCategoryArticles', commit)
    },
    // 获取文章详情
    getArticleDetail ({ commit }, id: number | string) {
      return asyncAndCommit(`/api/blog/detail?id=${id}`, 'getArticleDetail', commit)
    },
    // 更新浏览量
    updateThumbcount ({ commit }, id: number | string) {
      return asyncAndCommit(`/api/blog/thumbcount?id=${id}`, 'updateThumbcount', commit)
    }
  },
  mutations: {
    // 改变 loading
    setLoading (state, status) {
      state.loading = status
    },
    // 获取最新博客
    getNewBlog (state, { data }) {
      sortAndFormat(data)
      data.map(item => {
        if (item.tags) {
          item.tags = item.tags.split(',')
        }
      })
      // 取出最新的 5 条博客
      state.articles = data.slice(0, 5)
    },
    // 获取分类列表
    getCategory (state, { data }) {
      state.category = data
    },
    // 获取某一分类的博客
    getCategoryArticles (state, { data }) {
      sortAndFormat(data)
      // console.log('mutation', data)
      data.map(item => {
        if (item.tags) {
          item.tags = item.tags.split(',')
        }
      })
      state.categoryArticles = data
    },
    // 获取文章详情
    getArticleDetail (state, { data }) {
      // console.log('detailData', data)
      sortAndFormat(data)
      if (data.tags) {
        data.tags = data.tags.split(',')
      }
      state.articleDetail = data
    },
    // 更新浏览量
    updateThumbcount (state, { data }) {
      // console.log('mutation', data[0].thumbcount)
      state.updateThumbcount = data[0].thumbcount
    }
  },
  getters: {
    // 获取最新博客
    getNewBlog: state => state.articles,
    // 获取分类列表
    getCategory: state => state.category,
    // 获取某一分类的博客
    getCategoryArticles: state => state.categoryArticles,
    // 获取文章详情
    getArticleDetail: state => state.articleDetail,
    // 更新浏览量
    updateThumbcount: state => state.updateThumbcount
  }
})

export default store
