import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import shapes from "./modules/shapes";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    shapes,
  },
  plugins: [createPersistedState({ 
    storage: window.localStorage,
    key: 'fec',
    paths: ['shapes',]
  })]
})
