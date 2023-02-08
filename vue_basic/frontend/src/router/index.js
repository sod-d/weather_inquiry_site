import Vue from "vue";
import Router from "vue-router";
import Define from "@/common/define";
import EventBus from "@/common/EventBus";
const PopTest = () => import(/* webpackChunkName: "chunk/model" */'../views/Popup/Popup');

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
    {
      path: "/",
      redirect: "/sample",
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

// 전역 네비게이션
const anonymous_pages = ['/', '/login', '/home', '/dashboard', '/landing'];
export const popupAutoClose = (closeEvt, closeCbEvt ) => {
  return new Promise((resolve, reject) => {
    if(!EventBus._events[closeEvt]) resolve();
    EventBus.$off(closeCbEvt);
    EventBus.$on(closeCbEvt, (canMove) => {
      // 닫힌 팝업이 없이 이동해도 괜찮다면 canMove = true
      // 닫힌 팝업이 존재하여 이동을 멈춰야한다면 canMove = false
      EventBus.$off(closeCbEvt)
      canMove ? resolve() : reject();
      })
    EventBus.$emit(closeEvt);
  })

}

export default router;
