// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import LoginView from '@/views/LoginView.vue'
const routes = [
  {
    path: '/',
    component:Home
  },
  {
    path: '/login',
    component:LoginView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
