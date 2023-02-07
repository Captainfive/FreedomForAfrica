// imports
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

// Routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutPage.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('../views/MapPage.vue')
  },
  {
    path: '/countryList',
    name: 'countylist',
    component: () => import('../views/CountryList.vue')
  },
  {
    path: '/Country/:id/:slug',
    name: 'country.show',
    component: () => import('../views/CountryPage.vue')
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
