import { asyncRouterMap } from '../../router'

const user = {
  state: {
    info: {}
  },

  mutations: {
    SET_USER_INFO: (state, info) => {
      state.info = info
    },
    SET_ROUTER_INFO: (state, asyncRouterMap) => {
      state.asyncRouterMap = asyncRouterMap
    }
  },

  actions: {
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        const userInfo = {
          name: 'mqy',
          age: '26'
        }
        commit('SET_USER_INFO', userInfo)
        commit('SET_ROUTER_INFO', asyncRouterMap)
        resolve(userInfo)
      })
    }
  }
}

export default user
