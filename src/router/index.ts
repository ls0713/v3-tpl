import { createRouter, createWebHistory } from 'vue-router'

const demo = () => import('@/components/demo.vue')
const routes = [
  {
    path: '/demo',
    name: 'demo',
    component: demo
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router