import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import(/* webpackChunkName: "Terms" */ '../views/Terms.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import(/* webpackChunkName: "Terms" */ '../views/Faq.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "Terms" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'register',
    component: () => import(/* webpackChunkName: "Terms" */ '../views/Register.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
