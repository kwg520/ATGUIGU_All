/* 导入创建路由对象需要使用的函数 */
import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../components/Home.vue"
import List from "../components/List.vue"
import Update from "../components/Update.vue"
import Add from "../components/Add.vue"
import ShowDetail from "../components/ShowDetail.vue"
import ShowDetail2 from "../components/ShowDetail2.vue"
//创建一个路由对象
const router = createRouter({
  //history 属性用于记录路由的历史
  history: createWebHashHistory(),
  //用于定义多个不同的路径和组件之间的对应关系
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/showDetail2",
      component: ShowDetail2,
    },
    {
      path: "/showDetail/:id/:language",
      component: ShowDetail,
    },
    {
      path: "/list",
      component: List,
    },
    {
      path: "/update",
      component: Update,
    },
    {
      path: "/add",
      component: Add,
    },
    {
      path: "/",
      component: Home,
    },
    {
      path: "/showAll",
      redirect: "/list",
    },
  ],
})

//全局前置路由守卫
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
})

//全局后置路由守卫
router.afterEach((to, from) => {
  // to and from are both route objects.
})

//向外暴露router
export default router
