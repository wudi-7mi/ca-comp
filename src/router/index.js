import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Plan from '../views/Plan.vue'
import Settings from '../views/Settings.vue'
import Submit from '../views/Submit.vue'
import Test from '../views/Test.vue'

import Question01 from '../views/questions/question01.vue'
import Question02 from '../views/questions/question02.vue'
import Question03 from '../views/questions/question03.vue'
import Question04 from '../views/questions/question04.vue'
import Question05 from '../views/questions/question05.vue'

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
      component: Settings,
      children: [
        {
          path: 'question01',
          component: Question01
        },
        {
          path: 'question02',
          component: Question02
        },
        {
          path: 'question03',
          component: Question03
        },
        {
          path: 'question04',
          component: Question04
        },
        {
          path: 'question05',
          component: Question05
        },
      ]
    },
    {
      path: '/Submit',
      name: 'submit',
      component: Submit
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})

export default router
