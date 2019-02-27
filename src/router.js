import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "is-active",
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/sobre",
      name: "sobre",
      // route level code-splitting
      // this generates a separate chunk (sobre.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "sobre" */ "./views/Sobre.vue")
    },
    {
      path: "/contribua",
      name: "contribua",
      // route level code-splitting
      // this generates a separate chunk (sobre.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "sobre" */ "./views/Contribua.vue")
    },
    {
      path: "/event/:id",
      name: "event",
      component: () =>
        import(/* webpackChunkName: "event" */ "./views/Event.vue")
    }
  ]
});
