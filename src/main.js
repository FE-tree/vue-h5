import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import config from '@/config'
import 'normalize.css/normalize.css'

// import './utils/pxtorem'

import '@/icons' // icon

if (process.env.NODE_ENV === 'development' && config.vconsole) {
    const VConsole = require('vconsole')
    const my_console = new VConsole()
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
