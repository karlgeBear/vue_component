# APP_baseAjax
### 1、在vue的mounted方法中发ajax，有以下两种方法
* vue-resource
  * 1、下载yarn add vue-resource
  * 2、 在入口文件(index)引入并且
  * 2.1、声明使用插件：Vue.use(VueResource)
  * 2.2、因此组件对象都有了一个属性$http对象（此对象有get、post等方法）
  * 3、在组件发Ajax：this.this.$http.get(url,..)
* axios
  * 下载yarn add axios
  * 组件引入,即可发Ajax
  # Ajax-demo
  * 实现兄弟组件之间的通信：全局事件总线
    * 在入口文件index.js设置Vue.prototyoe.$globalEventBus或者this.__proto__.$globalEventBus = this(this就是new Vue)
    * 自定义事件：在search(获取)搜索数据,分发事件，在Main(数据响应渲染界面)绑定监听事件从而触发事件
    * 使用axios在 绑定监听事件的 回调函数 发Ajax