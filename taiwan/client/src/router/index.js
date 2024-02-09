import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import FoodList from '../views/FoodList.vue'
import FoodDetail from '../views/FoodDetail.vue'
import SearchPage from '../views/SearchPage.vue'
import FoodCart from '../views/FoodCart.vue'

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
  },

  {
    path: '/searchpage',
    name: 'SearchPage',
    component: SearchPage
  },

  {
    path: '/foodcart',
    name: 'FoodCart',
    component: FoodCart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
