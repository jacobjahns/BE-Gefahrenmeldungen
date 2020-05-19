import Vue from 'vue';
import VueRouter from 'vue-router';
import Meldungen from '../views/Meldungen.vue';
import Luftballons from '../views/Luftballons.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/gefahrenmeldungen/',
    name: 'Meldungen',
    component: Meldungen
  },
  {
    path: '/luftballons/',
    name: Luftballons,
    component: Luftballons
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
