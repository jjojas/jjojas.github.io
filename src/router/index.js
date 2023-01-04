import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home',
     }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../pages/Portfolio.vue'),
    meta: {
      title: 'Portfolio',
     }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../pages/Blog.vue'),
    meta: {
      title: 'Blog',
     }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Home';

  next();
})
export default router