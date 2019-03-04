import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './vuex/store'
import './utils/rem'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
