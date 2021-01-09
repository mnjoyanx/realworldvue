import authApi from '@/api/auth'
import { setItem } from '@/helpers/persistanceStorage'



const state = {
    isSubmitting: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null
}
const mutations = {
    REGISTER_START() {
        state.isSubmitting = true
    },

    REGISTER_SUCCESS(state, payload) {
        state.isSubmitting = false
        state.currentUser = payload
        state.isLoggedIn = true
    },

    REGISTER_FAILED(state, payload) {
        state.isSubmitting = false
        state.validationErrors = payload
    }
}

const actions = {
    SIGN_UP({
        commit
    }, credentials) {
        return new Promise((resolve) => {
            commit('REGISTER_START')
            authApi.register(credentials)
                .then(res => {
                    commit('REGISTER_SUCCESS', credentials)
                    setItem('accessToken', res.data.user.token)
                    resolve(res.data.user)
                })
                .catch(err => {
                    commit('REGISTER_FAILED', err.response.data.errors)
                    console.log(err, err.response.data.errors)
                })
        })
    }
}


export default {
    state,
    mutations,
    actions
}