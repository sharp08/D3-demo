import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as D3 from "d3"
import { RANDOM } from '@pingzi_1227/tool-box'

window.RANDOM = RANDOM
window.D3 = D3

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
