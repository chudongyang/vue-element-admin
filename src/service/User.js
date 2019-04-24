import BaseService from './Base'

export default class UserService extends BaseService {
  // 用户登录接口
  userLogin (params) {
    return this.axiosInstance.post('/user/login', params)
  }
}
