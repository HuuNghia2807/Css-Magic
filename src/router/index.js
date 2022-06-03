import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../Layout/MainLayout.vue'
import LoadingView from '../views/LoadingView.vue'
import Loading2View from '../views/Loading2View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainLayout,
      children: [
        {
          path: '',
          component: LoadingView,
        },
        {
          path: 'loading-2',
          component: Loading2View,
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
