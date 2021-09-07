import Vue from 'vue'  
//import MintUI from 'mint-ui' // 引入入整个ui库
import {Button} from 'mint-ui' //按需引入，此操作需要配置babel-plugin-component@1.1.1插件
import App from './App.vue'

//全局注册UI组件
Vue.component(Button.name,Button)  //参数1：组件名，参数2：导入的组件

Vue.config.productionTip = false
new Vue({
  el: "#root",
  components: {
    App:App
  },template: '<App/>'
})