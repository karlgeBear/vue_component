import Vue from 'vue'  
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'

Vue.config.productionTip = false
new Vue({
  components: {
    App:App
  },template: '<App/>',
  router
}).$mount('#root')