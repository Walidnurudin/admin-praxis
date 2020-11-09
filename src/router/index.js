import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
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
    path: '/login',
    name: 'Login',
    component: () => import("../views/Login.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!['Login'].includes(to.name) && !localStorage.getItem('Bearer')) {
    return next('Login')
  }
  next()
});

export default router
