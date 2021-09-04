import Vue from 'vue'  
import VueResource from 'vue-resource'
import App from './App.vue'

// 声明使用插件(内部安装了一个)
Vue.use(VueResource) //所有组件对象都有了一个属性$http对象（此对象有get、post等方法）

Vue.config.productionTip = false
new Vue({
  el: "#root",
  render: h => h(App),
  beforeCreate(){ //尽早时间保存当前的vm，作为全局事件总线对象
    Vue.prototype.$globalEventBus = this
  }
})