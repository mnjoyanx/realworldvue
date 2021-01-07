const state = {
    isSubmitting: false  
}
const mutations = {
    REGISTER_START() {
        state.isSubmitting = true
    }
}



export default {
    state,
    mutations
}