import Vue from 'vue';
import VueRouter from 'vue-router';
import AppBarConfig from '../router/AppBarConfig.js';

Vue.use(VueRouter);
const router = new VueRouter({
  base: process.env.BASE_URL,
  routes: [...AppBarConfig],
})


export default router;