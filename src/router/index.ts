import { createRouter, createWebHistory } from 'vue-router'
import FlagQuiz from '@/components/FlagQuiz.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FlagQuiz
    },
  ]
})

export default router