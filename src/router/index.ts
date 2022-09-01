import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/get-started',
      name: 'get_started',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/GetStarted.vue')
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('../views/ComponentInspection.vue')
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: () => import('../views/VuexInspection.vue')
    },
    {
      path: '/questions',
      name: 'questions',
      component: () => import('../views/QuestionTime.vue')
    }
  ]
})

export default router
