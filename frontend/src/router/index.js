import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    meta: { layout: "main" },
    component: () => import("@/pages/HomePage.vue"),
  },

  {
    path: "/constructor/:typeId",
    name: "constructor",
    meta: { layout: "main" },
    component: () => import("@/pages/DesignConstructor.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
