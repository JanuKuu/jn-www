import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MediaView from '../views/MediaView.vue'
import ShopView from '../views/ShopView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  /* route level code-splitting
  this generates a separate chunk (View.[hash].js) for each route
  which is lazy-loaded when the route is visited.
  */
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/media',
      name: 'media',
      component: MediaView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/dm',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
