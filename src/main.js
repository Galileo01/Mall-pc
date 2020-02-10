import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'

import toast from './components/common/toast'
Vue.config.productionTip = false

Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/holder.jpg')
})

Vue.use(toast)

Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
      // 聚焦元素
      el.focus()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
