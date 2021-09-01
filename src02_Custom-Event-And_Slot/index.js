//原本查找："dist/vue.runtime.esm.js(不带模板编译器)
//查找：'vue/dist/vue.esm.js'  //表示精准匹配
import Vue from 'vue'  
import App from './App.vue'
import "./index.css"

Vue.config.productionTip = false

//给Vue的原型对象添加一个vm对象属性
//Vue.prototype.$vm = new Vue()
//$vm就是全局事件总线（global event bus）
 Vue.prototype.$globalEventBus = new Vue()
// Vue.prototype.$eventBus = new Vue()
// Vue.prototype.$bus = new Vue()

new Vue({
  el: "#root",
  render: function (createElement) {  //用来渲染组件标签的回调函数
    return createElement(App) //返回<App/>
  }, //调用render函数得到它的组件标签对象
  beforeCreate(){ //尽早时间保存当前的vm，作为全局事件总线对象
    Vue.prototype.$globalEventBus = this
  }
})