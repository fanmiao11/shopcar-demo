import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


import axios from 'axios'
axios.defaults.baseURL = 'https://www.escook.cn';
Vue.prototype.$axios=axios

import 'bootstrap/dist/css/bootstrap.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
