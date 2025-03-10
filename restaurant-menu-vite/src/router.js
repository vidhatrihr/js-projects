import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './views/Home.vue';
import Checkout from './views/Checkout.vue';
import TrackOrder from './views/TrackOrder.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/checkout', component: Checkout },
  { path: '/track-order', component: TrackOrder },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
