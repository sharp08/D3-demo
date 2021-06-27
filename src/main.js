import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as D3 from "d3"
import MyPlugin from '@/assets/MyPlugin'
import BaseWin from "@/components/BaseWin"

import notice from '@/components/NoticeDemo/components/Notice';
Vue.prototype.$notice = notice;

import 'animate.css'

window.D3 = D3

Vue.prototype.$BaseWin = BaseWin;
Vue.use(MyPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
