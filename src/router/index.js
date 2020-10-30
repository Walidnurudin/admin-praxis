import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import("../views/Dashboard.vue")
  },
  {
    path: '/tambah-karya',
    name: 'Tambah-karya',
    component: () => import("../views/Tambah-karya.vue")
  },
  {
    path: '/tampil-table',
    name: 'Tampil-table',
    component: () => import("../views/Tampil-table.vue")
  },
  {
    path: '/',
    name: 'Dashboard',
    component: () => import("../views/Dashboard.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
