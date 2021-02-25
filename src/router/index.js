import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";

const routes = [

  {
    path: "/",
    alias: "/articles",
    name: "articles",
    component: () => import("../components/ArticlesList.vue")
  },
  {
    path: "/articles/:id",
    name: "article-details",
    component: () => import("../components/Article.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
