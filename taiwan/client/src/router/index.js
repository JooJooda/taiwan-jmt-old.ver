import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import FoodList from '../views/FoodList.vue'
import FoodDetail from '../views/FoodDetail.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  
  {
    path: '/foodlist',
    name: 'FoodList',
    component: FoodList
  },

  {
    path: '/fooddetail',
    name: 'FoodDetail',
    component: FoodDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
