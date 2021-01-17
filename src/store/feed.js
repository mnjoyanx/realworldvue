import apiFeed from '@/api/feed'

const state = {
  data: null,
  isLoading: false,
  error: null
}

const mutations = {
  GET_FEED_START(state) {
    state.isLoading = true
    state.data = null
    state.error = null
  },
  GET_FEED_SUCCESS(state, payload) {
    state.data = payload
    state.error = null
    state.isLoading = false
  },
  GET_FEED_FAILURE(state) {
    state.isLoading = false
  }
}

const actions = {
  GET_FEED({commit}, apiUrl) {
    return new Promise(resolve => {
      commit('GET_FEED_START')
      apiFeed.getFeed(apiUrl)
        .then(response => {
          console.log(response);
          commit('GET_FEED_SUCCESS', apiUrl)
          resolve(response)
        })
        .catch(err => {
          commit('GET_FEED_FAILURE')
          console.log(err, apiUrl);
        })
    })
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}