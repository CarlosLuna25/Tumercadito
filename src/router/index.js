import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
//components of Auth
import Login from "../views/Auth/Login.vue";
import Register from "../views/Auth/RegisterView.vue";
Vue.use(VueRouter);

const routes = [
  {path:"/register",
  name:"Register",
  component:Register
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path:"/login",
    name:"Login",
    component:Login
  },
  
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
