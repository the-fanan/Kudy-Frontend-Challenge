import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import movable from "v-movable";
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./assets/sass/main.scss";

Vue.use(BootstrapVue)
Vue.use(movable)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
