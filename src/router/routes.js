import HelloWorld from "pages/HelloWorld.vue";
import TestPage from "src/pages/TestPage.vue";
import DjangoPage from "src/pages/DjangoPage.vue";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "hello", component: HelloWorld, meta: { title: "Home Page" } }, // HelloWorld 페이지 추가
      { path: "test", component: TestPage },
      { path: "/", component: DjangoPage },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
