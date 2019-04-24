// 主要存储不分模块的其他状态
import Cookie from 'js-cookie'

const state = {
  sidebar: {
    opened: !+Cookie.get('sidebarStatus') // 左侧侧边栏sidebar的展开状态
  },
  network: false // 默认没有断网，不显示断网的组件
}

const mutations = {
  TOGGLE_SIDEBAR: (state) => { // 切换sidebar的状态
    if (state.sidebar.opened) { // 说明 sidebarStatus不存在或者值是 0
      Cookie.set('sidebarStatus', 1)
    } else {
      Cookie.set('sidebarStatus', 0)
    }
    state.sidebar.opened = !state.sidebar.opened
  },
  SET_NETWORK: (state, bool) => { // 设置网络的状态
    state.network = bool
  }
}

const actions = {
  ToggleSidebar ({ commit }) {
    commit('TOGGLE_SIDEBAR')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
