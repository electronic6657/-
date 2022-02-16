import CooKie from 'js-cookie'


export default {
  state: {
    token: ''
  },
  mutations: {
    setToken(state,val){
      state.toKen = val
      CooKie.set('token',val)
    },
    clearToken(state){
      state.toKen = ''
      CooKie.remove('token')
    },
    getToken(state){
      state.token = state.token || CooKie.get('token')
    }
  }

}
