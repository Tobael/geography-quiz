import GameSelector from '@/components/GameSelector.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GameSelector,
    },
    // {
    //   path: '/flags',
    //   name: 'flags',
    //   component: FlagQuiz,
    // },
  ],
})

export default router
