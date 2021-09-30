import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/index.less'
import 'amfe-flexible'
import * as API from '@/api/detail.js'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
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
