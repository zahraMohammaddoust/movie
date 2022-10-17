import { createRouter, createWebHistory } from 'vue-router'

import PageOne from '../components/PageOne'
import PageTwo from '../components/PageTwo'

const routes = [
  {
    path: '/',
    name: 'PageOne',
    component: PageOne
  },
  {
    path: '/PageTwo',
    name: 'PageTwo',
    component: PageTwo
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
