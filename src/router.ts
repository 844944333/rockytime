import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Category from '@/views/Category.vue'
import ArticleList from '@/views/ArticleList.vue'
import Detail from '@/views/Detail.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/articles/:title',
      name: 'articles',
      component: ArticleList
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 500)
    })
  }
})
// router.beforeEach((to, from, next) => {
//   // 暂时使用此方法解决 Vue 进入新页面时与原页面滚动到相同高度的解决方案 ⚙️
//   document.documentElement.scrollTop = 0
//   next()
// })
export default router
