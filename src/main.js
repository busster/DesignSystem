import Vue from 'vue'
import App from './App.vue'

import DesignSystem from './index.js'
Vue.use(DesignSystem)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
