import authApi from '@/api/auth'



const state = {
    isSubmitting: false  
}
const mutations = {
    REGISTER_START() {
        state.isSubmitting = true
    },

    REGISTER_SUCCESS(state) {
        state.isSubmitting = false
    },

    REGISTER_FAILED(state) {
        state.isSubmitting = false
    }
}

const actions = {
    SIGN_UP({commit}, credentials) {
        return new Promise((resolve) => {
            commit('REGISTER_START')
            authApi.register(credentials)
                .then(res => {
                    commit('REGISTER_SUCCESS')
                    console.log(res, res.data);
                    resolve(res.data.user)
                })
                .catch(err => {
                    commit('REGISTER_FAILED')
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