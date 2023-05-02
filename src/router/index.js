import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/homeindex.vue";
import Todos from "../pages/test/testindex.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/test",
      name: "Test",
      component: Todos
    }
  ],
});

export default router;