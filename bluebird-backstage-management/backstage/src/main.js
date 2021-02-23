import Vue from 'vue'
//全局配置
import '@/assets/scss/reset.scss'
import 'element-ui/lib/theme-chalk/index.css'
import http from '@/api/config'

//第三方包
import ElementUI from 'element-ui'

import App from './App.vue'
import router from './router'
import store from './store'
require('./mock')

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
