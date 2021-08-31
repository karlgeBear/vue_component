//原本查找："dist/vue.runtime.esm.js(不带模板编译器)
//查找：'vue/dist/vue.esm.js'  //表示精准匹配
import Vue from 'vue'  
import App from './App.vue'
import "./index.css"

Vue.config.productionTip = false

new Vue({
  el: "#root",
  render: function (createElement) {  //用来渲染组件标签的回调函数
    return createElement(App) //返回<App/>
  } //调用render函数得到它的组件标签对象
})