import Vue from "vue";
import Router from "vue-router";
import Define from "@/common/define";

const AlertTest = () => import(/* webpackChunkName: "chunk/model" */'../views/AlertTest');
const ConfirmTest = () => import(/* webpackChunkName: "chunk/model" */'../views/ConfirmTest');
const Login = () => import(/* webpackChunkName: "chunk/model" */ "../views/Login/Login");
const PopTest = () => import(/* webpackChunkName: "chunk/model" */'../views/Modal/Popup');

const SamplePage = () => import('../views/DC/SamplePage.vue');
const Weather = () => import('../views/SY/Weather.vue');
const Sky = () => import('../views/DC/SkyWeather.vue');
const Sea = () => import('../views/DC/SeaWeather.vue');
const Location = () => import('../views/HJ/Location.vue');
const Temperature = () => import('../views/JA/Temperature.vue');
const Mountain = () => import('../views/JD/MountainWeather.vue');



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
    {
      path: "/weather",
      name: "날씨조회",
      component: Weather,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: "dashboard",
      },
    },
    {
      path: "/sky",
      name: "기상특보",
      component: Sky,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: "dashboard",
      },
    },
    {
      path: "/sea",
      name: "바다예보",
      component: Sea,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: "dashboard",
      },
    },
    {
      path: "/location",
      name: "관심지역 설정",
      component: Location,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: "dashboard",
      },
    },
    {
      path: "/tempe",
      name: "전국 온도/강수",
      component: Temperature,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: "dashboard",
      },
    },
    {
      path: "/mountain",
      name: "산악날씨",
      component: Mountain,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: "dashboard",
      },
    },
  ],
});

export default router;
