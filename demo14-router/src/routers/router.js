/* 导入创建路由对象需要使用的函数 */
import { createRouter, createWebHashHistory } from "vue-router"
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
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
      path: "/login",
      component: Login,
    },
  
  ],
})

//全局前置路由守卫
router.beforeEach((to, from, next) => {
  if((to.path == '/home' && window.sessionStorage.getItem('userName')=='root') 
   || (to.path == '/login')){
       next()
  }else{
    next('/login')
  }

  // if(to.path ='/login'){
  //     next()
  // }else{
  //    const userName = sessionStorage.getItem('userName')
  //    if(null != userName){
  //      next()
  //    }else{
  //       next('/login')
  //    }
  // }

})

//向外暴露router
export default router
