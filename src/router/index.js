import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from '@/store'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/register",
    name: "signUp",
    component: () => import("@/views/Register")
  },
  {
    path: "/login",
    name: "signIn",
    component: () => import("@/views/Login")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // if () ete kan errorner not jnji
  store.commit('RESET_VALIDATION_ERROR')
  next()
}) 

export default router;
