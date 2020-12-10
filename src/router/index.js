import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/pizza',
    name: 'Pizza',
    component: () => import('../views/Pizza.vue'),
  },
  {
    path: '/hamburguesa',
    name: 'Hamburguesa',
    component: () => import('../views/Hamburguesa.vue'),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
