import Vue from 'vue'  
import App from './App.vue'
import store from './vuex/store'

Vue.config.productionTip = false
new Vue({
  components: {
    App:App
  },
  template: '<App/>',
  store // 所有的组件对象都能看到一个指定store属性：$store
}).$mount('#root')