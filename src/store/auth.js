import authApi from "@/api/auth"
import { setItem } from "@/helpers/persistanceStorage"

const state = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null
}
const mutations = {
  REGISTER_START() {
    state.isSubmitting = true
    state.validationErrors = null
  },

  REGISTER_SUCCESS(state, payload) {
    state.isSubmitting = false
    state.currentUser = payload
    state.isLoggedIn = true
  },

  REGISTER_FAILED(state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },
  
  // SignIn
  LOGIN_START(state) {
    state.isSubmitting = true
    state.validationErrors = null
  },

  LOGIN_SUCCESS(state, payload) {
    console.log(payload);
    state.isSubmitting = false
    state.currentUser = payload
    state.isLoggedIn = true
  },

  LOGIN_FAILED(state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },

  RESET_VALIDATION_ERROR (state) {
    state.validationErrors = null
  }

}

const actions = {
  SIGN_UP({ commit }, credentials) {
    return new Promise(resolve => {
      commit("REGISTER_START")
      authApi
        .register(credentials)
        .then(res => {
          commit("REGISTER_SUCCESS", credentials)
          setItem("accessToken", res.data.user.token)
          resolve(res.data.user)
        })
        .catch(err => {
          commit("REGISTER_FAILED", err.response.data.errors)
          console.log(err, err.response.data.errors)
        })
    })
  },

  // SIGNIN
  SIGN_IN({commit}, credentials) {
    return new Promise(resolve => {
      commit('LOGIN_START')
      authApi.login(credentials)
        .then(res => {
          commit('LOGIN_SUCCESS', res.data.user)
          setItem("accessToken", res.data.user.token)
          resolve(res.data.user)
        })
        .catch(err => {
          commit('LOGIN_FAILED', err.response.data.errors)
          console.log(err.response.data.errors, 5454568445);
        })
    })
  }
}

const getters = {
  isSubmitting(state) {
    return state.isSubmitting
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
