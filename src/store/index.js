import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import shapes from "./modules/shapes";
import alert from "./modules/alert";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    shapes,alert,
  },
  plugins: [createPersistedState({ 
    storage: window.localStorage,
    key: 'fec',
    paths: ['shapes',]
  })]
})
