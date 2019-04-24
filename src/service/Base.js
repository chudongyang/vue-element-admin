import Resource from './Resource'
import store from '../store'
import router from '../router'
import { Message } from 'element-ui'

/**
 * 使用element-UI的Message组件封装错误提示信息函数
 * @param {*} message
 */
const Toast = (message) => {
  Message({
    message,
    type: 'error',
    duration: 1500,
    showClose: true
  })
}

/**
 * 封装跳转到登录页的逻辑
 */
const jumpToLogin = () => {
  router.replace({
    path: 'login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}

/**
 * 封装请求失败后的统一处理函数
 * @param {*} status
 * @param {*} message
 */
const errorHandle = (status, message) => {
  switch (status) {
    case 401: // 401 是没有登录，跳转到登录页
      jumpToLogin()
      break
    case 403: // 403 是token过期，重新登录
      Toast('登录过期，请重新登录')
      store.commit('SET_TOKEN', '')
      localStorage.removeItem('token')
      setTimeout(() => {
        jumpToLogin()
      }, 1000)
      break
    case 404: // 404 请求不存在
      Toast('请求的资源不存在')
      break
    default:
      console.log(message)
  }
}

/**
 * 封装BaseService请求基类
 * isInjectResponseHook为true则只返回data数据
 * contentType 是设置请求的content-type
 */
class BaseService extends Resource {
  constructor (isInjectResponseHook = true, contentType) {
    super(process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://production.com', contentType)
    // 注入请求的钩子函数，可以在此处设置一些通用的请求头，比如token的请求头
    this.injectRequestHook(config => {
      if (store.state.user.token) {
        this.setHeader('TOKEN', store.state.user.token)
      }
      return config
    })
    this.injectResponseHook(response => {
      if (response.status === 200) {
        // response.data.data 第二个 data 根据后台返的key值决定
        return isInjectResponseHook ? response.data.data : response.data
      } else {
        Promise.reject(response)
      }
    }, error => {
      const { response } = error
      if (response) { // response 存在说明请求返回了
        errorHandle(response.status, response.data.message)
      } else { // 处理断网的情况
        store.commit('app/SET_NETWORK', false)
      }
    })
  }
}

export default BaseService
