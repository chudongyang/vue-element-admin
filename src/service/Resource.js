import axios from 'axios'
// import qs from 'qs'

export default class Resource {
  constructor (baseUrl, contentType) {
    this.baseUrl = baseUrl // 设置请求的baseURL(比如https://development.com/api)
    this.axiosInstance = null // axios的实例
    this.timeout = 1000 * 12 // 设置请求超时时间
    this.contentType = contentType || 'application/x-www-form-urlencoded' // 这是请求的content-type
    this.init()
  }

  // 初始化函数，创建axios实例等
  init () {
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      timeout: this.timeout
    })
    this.setHeader('Content-Type', this.contentType)
    // 注入请求钩子
    this.injectRequestHook(config => {
      return config
    })
    // 注入响应钩子函数
    this.injectResponseHook(response => {
      return response
    }, error => {
      return error
    })
  }

  /**
   * 注入请求钩子函数
   * @param {*} hookFunction 注入请求的钩子函数
   */
  injectRequestHook (hookFunction) {
    this.axiosInstance.interceptors.request.use(config => {
      if (typeof hookFunction === 'function') {
        return hookFunction(config) // 这里必须要return 返回 hookFunction函数返回的config
      }
    })
  }

  /**
   * 注入响应的钩子函数
   * @param {*} resolveHook
   * @param {*} rejectHook
   */
  injectResponseHook (resolveHook, rejectHook) {
    this.axiosInstance.interceptors.response.use(response => {
      if (typeof resolveHook === 'function') {
        let returnValue = resolveHook(response)
        if (typeof returnValue !== 'undefined') {
          return returnValue
        }
      }
    }, error => {
      if (typeof rejectHook === 'function') {
        rejectHook(error)
      }
    })
  }

  /**
   * // 设置请求的头
   * @param {*} key
   * @param {*} value
   * @param {*} requestType 请求的类型
   */
  setHeader (key, value, requestType) {
    if (key && value) {
      requestType = requestType || 'common'
      let header = this.axiosInstance.defaults.headers[requestType]
      header[key] = value
    }
  }
}
