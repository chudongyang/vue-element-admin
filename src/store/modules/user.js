import UserService from '@/service/User.js'
const state = {
  token: '1234', // 用户的token
  name: '', // 用户的名字
  avatar: '', // 用户的头像
  roles: [] // 用户的路由权限
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  login ({commit}, userInfo) { // 登录的逻辑
    const userService = new UserService();
    return new Promise((resolve, reject) => {
      userService.userLogin(userInfo).then(res => {
        let {token} = res
        commit('SET_TOKEN', token)
        localStorage.setItem('token', token)
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },
  getUserInfo ({ commit }) { // 获取用户的信息，包括头像、昵称、权限等
    return new Promise((resolve, reject) => {
      // 先写成假数据
      let roles = ['admin']; let name = 'promise'; let avatar = 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
      commit('SET_NAME', name)
      commit('SET_ROLES', roles)
      commit('SET_AVATAR', avatar)
      resolve({ roles, name, avatar })
    })
  },
  logout () { // 退出的逻辑

  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
