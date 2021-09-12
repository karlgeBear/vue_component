import Vue from 'vue'  
import App from './App.vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false
new Vue({
  el: "#root",
  render: h => h(App),  //渲染函数接收一个 createElement 方法作为第一个参数用来创建 VNode(创建DOM节点，插入html)
  store // 所有的组件对象都能看到一个指定store属性：$store
})