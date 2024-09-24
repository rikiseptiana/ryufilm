import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TvSeriesView from "@/views/TvSeriesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/tvseries",
      name: "tvseries",
      component: TvSeriesView,
    },
  ],
});

export default router;
