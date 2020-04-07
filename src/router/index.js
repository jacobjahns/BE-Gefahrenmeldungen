import Vue from 'vue'
import VueRouter from 'vue-router'
import Meldungen from '../views/Meldungen.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Meldungen',
    component: Meldungen
  }
]

const router = new VueRouter({
  routes
})

export default router
