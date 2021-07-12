import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'normalize.css'
import '@/assets/index.less'
import 'amfe-flexible'
import '@/vantui.js'
import * as API from '@/api/detail.js'

Vue.prototype.$API = API
Vue.config.productionTip = false
Vue.filter('price', (val) => {
  return `￥${val}`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
