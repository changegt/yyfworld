import Vue from 'vue'

// import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

// import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import $ from 'jquery'
Vue.prototype.$ = $

import jsonp from 'vue-jsonp'
Vue.use(jsonp)

// import '@/icons' // icon
// import '@/permission' // permission control

//css
import '@/assets/css/reset-tb.css'
import '@/assets/less/ystyle.less'

Vue.use(ElementUI)

// Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
