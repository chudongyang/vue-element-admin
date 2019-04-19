// 主要用来初始化路由集合
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'

// 配置，关闭加载微调器
NProgress.configure({ showSpinner: false })

// 定义不用重定向的白名单
const whiteList = ['/login', '/auth-redirect']
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  // 这里需要判断token存不存在
  const hasToken = false
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) { // 说明权限已经存在
        next()
      } else {
        try {
          // 获取用户的去权限,如['admin']
          const { roles } = await store.dispatch('user/getUserInfo')
          // 根据用户权限获取可访问的路由集合
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          // 动态添加可访问的路由, 参数必须是符合 routes 选项要求的数组
          router.addRoutes(accessRoutes)
          next({ ...to, replace: true })
        } catch (error) {
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== 1) {
      console.log(1111111)
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
