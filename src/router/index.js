import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout/Index.vue';
Vue.use(Router);

// 定义不变的基础路由(所有人都可以访问的路由)
export const constantRoutes = [
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/Login.vue'),
    hidden: true
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '401',
    name: '401',
    component: () => import(/* webpackChunkName: "401" */ '@/views/error-page/401.vue'),
    hidden: true
  },
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    name: 'Dashboard',
    meta: { title: '面板', icon: 'dashboard' },
    children: [
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
        meta: { title: 'dashboard', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/menu',
    redirect: '/menu/menu1',
    component: Layout,
    name: 'menu',
    meta: { title: 'menu', icon: 'drag' },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/menu/menu1.vue'),
        meta: { title: 'menu1' },
        name: 'menu1',
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/menu/menu1-1.vue'),
            meta: { title: 'menu1-1' },
            name: 'menu1-1',
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/menu/menu1-2.vue'),
            meta: { title: 'menu1-2' },
            name: 'menu1-2',
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/menu/menu2.vue'),
        meta: { title: 'menu2' },
        name: 'menu2',
        children: [
          {
            path: 'menu2-1',
            component: () => import('@/views/menu/menu2-1.vue'),
            meta: { title: 'menu2-1' },
            name: 'menu2-1',
          },
          {
            path: 'menu2-2',
            component: () => import('@/views/menu/menu2-2.vue'),
            meta: { title: 'menu2-2' },
            name: 'menu2-2',
            children: [
              {
                path: 'menu2-2-1',
                component: () => import('@/views/menu/menu2-2-1.vue'),
                meta: { title: 'menu2-2-1' },
                name: 'menu2-2-1',
              },
              {
                path: 'menu2-2-2',
                component: () => import('@/views/menu/menu2-2-2.vue'),
                meta: { title: 'menu2-2-2' },
                name: 'menu2-2-2',
              }
            ]
          }
        ]
      },
      {
        path: 'menu3',
        component: () => import('@/views/menu/menu3.vue'),
        meta: { title: 'menu3' },
        name: 'menu3',
      }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'example',
    meta: { title: '案例', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'table',
        component: () => import(/* webpackChunkName: "table" */ '@/views/example/Table.vue'),
        meta: { title: 'table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'tree',
        component: () => import(/* webpackChunkName: "tree" */ '@/views/example/Tree.vue'),
        meta: { title: 'tree', icon: 'tree' }
      }
    ]
  }
  // {
  //   path: '*',
  //   redirect: '/404',
  //   hidden: true
  // }
];

// 定义根据用户的角色动态加载的路由
export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    name: 'permission',
    meta: {
      title: '权限',
      icon: 'nested',
      roles: ['admin', 'editor']
    },
    children: [
      {
        path: 'index',
        name: 'permissionIndex',
        component: () => import(/* webpackChunkName: "permissionIndex" */ '@/views/permission/Index.vue'),
        meta: { title: '权限页', icon: 'eye' }
      },
      {
        path: 'editor',
        name: 'permissionEditor',
        component: () => import(/* webpackChunkName: "permissionEditor" */ '@/views/permission/Editor.vue'),
        meta: {
          roles: ['admin'],
          title: '编辑页',
          icon: 'edit'
        }
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
