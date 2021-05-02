import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/stote'
import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:8000'
axios.interceptors.request.use(config => {
  store.commit('setLoading', true)
  return config
})
axios.interceptors.response.use(config => {
  setTimeout(() => {
    store.commit('setLoading', false)
  }, 500)
  return config
})

// 屏幕高度 - 头部导航栏高度 = 主体内容高度
const Height = window.screen.height - 172
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
const app = createApp(App)
// 设置全局变量
app.config.globalProperties.Height = Height
app.use(router)
app.use(store)
app.mount('#app')
