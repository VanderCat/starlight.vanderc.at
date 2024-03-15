import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Faq from '../views/Faq.vue'
import Status from '../views/Status.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/status',
      name: 'status',
      component: Status
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/profile/:name',
      name: 'profile',
      component: () => import('../views/Profile.vue')
    }
  ]
})

export default router
