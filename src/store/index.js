import Vue from "vue"
import Vuex from "vuex"

import auth from "@/store/auth.js"
import feed from "@/store/feed"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    feed
  }
});
