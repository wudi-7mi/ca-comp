import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Plan from '../views/Plan.vue'
import Settings from '../views/Settings.vue'
import Submit from '../views/Submit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Plan',
      name: 'plan',
      component: Plan
    },
    {
      path: '/Settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/Submit',
      name: 'submit',
      component: Submit
    }
  ]
})

export default router
