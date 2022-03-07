import { computed } from 'vue'
import { useStore } from 'vuex'

export const useToast = () => {
  const store = useStore()

  const toastMessage = computed(() => store.getters['toast/toastMessageWithSmile'])
  const toastAlertType = computed(() => store.getters['toast/toastAlertType'])
  const showToast = computed(() => store.getters['toast/showToast'])

  const triggerToast = (message, type = 'success') => {

    store.dispatch('toast/triggerToast', message, type)
    // dispatch 는 store안에 있는 actions의 함수를 사용할때 사용
    // 사용할 함수, payload
  }


  return {
    toastMessage,
    toastAlertType,
    showToast,
    triggerToast
  }
}