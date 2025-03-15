import Home from "@/components/Home.vue";
import Dashboard from "@/views/Dashboard.vue";
import Forger from "@/views/Forger.vue";
import Login from "@/views/Login.vue";
import Mail from "@/views/Mail.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // { path: "/", component: Home },
    { path: "/login", component: Login, alias: "/" },
    {
      path: "/forger",
      component: Forger,
    },
    { path: "/dashboard", component: Dashboard },
    { path: "/mail", component: Mail },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router;
