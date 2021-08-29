//原本查找："dist/vue.runtime.esm.js(不带模板编译器)
//查找：'vue/dist/vue.esm.js'  //表示精准匹配
import Vue from 'vue'  
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: "#root",
  //render: h => h(App)
  render: function (createElement) {  //用来渲染组件标签的回调函数
    return createElement(App) //返回<App/>
  } //调用render函数得到它的组件标签对象
})

/* new Vue({
  el: "#root",
  components: {
    App
  },
  template : '<App/>'
}) */

/* 
render：没有问题
  原因：内部使用vue-template-compliler提前编译好了模板
template：有问题
  原因：
      不使用vue-template-compliler,就不能编译template
      vue默认引入的是不带vue-template-compliler的版本
  解决：让webpack打包引入vue-template-compliler的版本
哪种好：render
  编码简洁
  打包文件小
*/