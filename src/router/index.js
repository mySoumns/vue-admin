import Vue from "vue"
import VueRouter from "vue-router"
import Layout from "@/layout" // 引入布局
const _import = require('@/router/_import_' + process.env.NODE_ENV)//获取组件的方法
import { getMenu } from "@/api/menu";
import { saveObjArr, getObjArr, getString } from "@/utils/index";

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 默认路由
const routes = [
  {
    path: '/',
    redirect: "/dashboard",
  }
  ,
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    meta: { title: '登录', icon: 'login' },
    name: "login"
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
});

// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (route.component) {
      if (route.component === 'Layout') {// Layout组件特殊处理
        route.component = Layout
      } else {
        route.component = _import(route.component) // 对路由组件进行处理
      }
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })

  return accessedRouters
}

let getRouter //用来获取后台拿到的路由

// 路由前卫
router.beforeEach((to, from, next) => {

  if (to.path === '/login') 
  {
    next();
  } 
  else 
  {
    const token = getString('token');
    if (!token) 
    { 
      // 如果没有token 去登录
      next(
          {
            path: '/login',
            query: {
                redirect: to.fullPath
            }
        }
      );
    } 
    else 
    { 
      // 如果有 去获取动态路由
      if (!getRouter) {
        if (!getObjArr('router')) { // 判断本地有没有路由表 如果有去本地获取
          getMenu().then(res => {
            if (
              res.status === 200 &&
              res.data != null &&
              res.data.length > 0
            ) {
              getRouter = res.data//后台拿到路由
              saveObjArr('router', getRouter) //存储路由到localStorage

              routerGo(to, next)//执行路由跳转方法
            }
          });
        } else {//从localStorage拿到了路由
          getRouter = getObjArr('router')//拿到路由
          routerGo(to, next)
        }
      } 
      else 
      {
        next()
      }
    }
  }
})

// 动态添加路由
function routerGo(to, next) {
  getRouter = filterAsyncRouter(getRouter) //过滤路由
  router.addRoutes(getRouter) //动态添加路由
  next({ ...to, replace: true })
}

export default router;