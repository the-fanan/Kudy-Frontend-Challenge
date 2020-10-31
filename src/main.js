import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import movable from "v-movable";
import { BootstrapVue } from 'bootstrap-vue';
import VueTouch from 'vue-touch';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./assets/sass/main.scss";

Vue.use(BootstrapVue)
Vue.use(movable)
Vue.use(VueTouch);
Vue.config.productionTip = false
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
