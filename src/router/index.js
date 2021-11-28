import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MaisPedidos from '../views/MaisPedidos.vue'
import Bebidas from '../views/Bebidas.vue'
import Lanches from '../views/Lanches.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/maispedidos',
    name: MaisPedidos,
    component: MaisPedidos
  },
  {
    path: '/bebidas',
    name: Bebidas,
    component: Bebidas
  },
  {
    path: '/lanches',
    name: Lanches,
    component: Lanches
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
