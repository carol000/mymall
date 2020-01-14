import Vue from 'vue'
import App from './App.vue'
import router from './router'
var bus = new Vue();
Vue.prototype.$bus = bus;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
