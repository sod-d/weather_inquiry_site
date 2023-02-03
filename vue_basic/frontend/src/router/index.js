import Vue from "vue";
import Router from "vue-router";
import Define from "@/common/define";

const AlertTest = () => import(/* webpackChunkName: "chunk/model" */'../views/AlertTest');
const ConfirmTest = () => import(/* webpackChunkName: "chunk/model" */'../views/ConfirmTest');
const Login = () => import(/* webpackChunkName: "chunk/model" */ "../views/Login/Login");
const PopTest = () => import(/* webpackChunkName: "chunk/model" */'../views/Modal/Popup');

const SamplePage = () => import('../views/DC/SamplePage.vue');



Vue.use(Router);

const router = new Router({
  mode: "hash",
  // base: '/', // only history mode
  routes: [
    { path: "/alert-test", name: "alert 테스트", component: AlertTest },
    { path: "/confirm-test", name: "confirm 테스트", component: ConfirmTest },

    {
      path: "/",
      redirect: "/sample",
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: "dashboard",
      },
    },
    {
      path: "/sample",
      name: "sample page",
      component: SamplePage,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: "dashboard",
      },
    },
  ],
});

export default router;
