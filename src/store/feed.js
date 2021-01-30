import apiFeed from '@/api/feed'

const state = {
    data: null,
    isLoading: false,
    error: null,

}

const mutations = {
    GET_FEED_START(state) {
        state.isLoading = true
        state.data = null
        state.error = null
    },
    GET_FEED_SUCCESS(state, payload) {
        console.log(payload, 'paylaod');
        state.data = payload
        state.error = null
        state.isLoading = false
    },
    GET_FEED_FAILURE(state) {
        state.isLoading = false
    }
}

const actions = {
    GET_FEED({ commit }, apiUrl) {
        console.log(apiUrl, 'getfeed apiurl');
        return new Promise(resolve => {
            commit('GET_FEED_START')
            apiFeed.getFeed(apiUrl)
                .then(response => {
                    console.log(response.data, 'response data');
                    commit('GET_FEED_SUCCESS', response.data)
                    resolve(response)
                })
                .catch(err => {
                    commit('GET_FEED_FAILURE')
                    console.log(err, apiUrl);
                })
        })
    }
}

export default {
    state,
    mutations,
    actions,
}