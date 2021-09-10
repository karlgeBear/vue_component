import Vue from 'vue'  
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'

Vue.config.productionTip = false
new Vue({
  components: {
    App:App
  },template: '<App/>',
  router  //所有组件都能通过$router属性看到router对象  / 所有的组件都有了代表当前路由的data数据：$route
}).$mount('#root')