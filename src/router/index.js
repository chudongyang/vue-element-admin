import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout/Index.vue';
Vue.use(Router);

// 定义不变的基础路由(所有人都可以访问的路由)
export const constantRoutes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import(/* webpackChunkName: "index" */ '@/views/Index.vue'),
        meta: { title: '首页', icon: 'index', noCache: true, affix: true }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue')
  },
  {
    path: '401',
    name: '401',
    component: () => import(/* webpackChunkName: "401" */ '@/views/401.vue')
  }
];

// 定义根据用户的角色动态加载的路由
export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    meta: {
      title: 'permission',
      roles: ['admin', 'editor']
    },
    children: [
      {
        path: 'index',
        name: 'indexPermission',
        component: () => import(/* webpackChunkName: "index" */ '@/views/Index.vue')
      }
    ]
  }
];

// 封装生成路由的函数
const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
  routes: constantRoutes
});

const router = createRouter();

export default router;
