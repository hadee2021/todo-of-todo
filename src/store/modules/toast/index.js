export default {
  namespaced: true,
  state: {
    toastMessage : '',
    toastAlertType :'',
    showToast : false,
    timeout : null
  },
  mutations: {
    UPDATE_TOAST_MESSAGE(state, payload) {
      state.toastMessage = payload
    },
    UPDATE_TOAST_ALERT_TYPE(state, payload) {
      state.toastAlertType = payload
    },
    UPDATE_TOAST_STATUS(state, payload) {
      state.showToast = payload
    },
  },
  actions: {
    triggerToast({ commit }, message, type = 'success') {
      //commit( mutions안의 함수와, payload )
      commit('UPDATE_TOAST_MESSAGE', message)  
      commit('UPDATE_TOAST_ALERT_TYPE', type)
      commit('UPDATE_TOAST_STATUS', true)

      setTimeout(() => {
        commit('UPDATE_TOAST_MESSAGE', '') 
        commit('UPDATE_TOAST_ALERT_TYPE', '')
        commit('UPDATE_TOAST_STATUS', false)
      },3000)
    }
  },
  getters: { //vuex안에서 사용하는  computed임 실시간감시
    toastMessageWithSmile(state) {
      return state.toastMessage + '^_^'
    },
    toastAlertType(state) {
      return state.toastAlertType
    },
    showToast(state) {
      return state.showToast
    }
  },
}
