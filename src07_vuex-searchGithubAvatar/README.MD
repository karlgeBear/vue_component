# 利用vuex的状态管理做的一个search_githubAvatar_demo (包含axios异步请求)
## 对vue应用中组件的状态进行集中式的管理
- 下载：yarn add vuex
- 在store.js文件导入--->声明使用插件--->new Vuex.Store
- 在入口文件index.js注册store，使所有的组件对象都能看到一个指定store属性：$store
- import {mapState,mapGetters, mapMutations, mapActions} from 'vuex'
  - 在数据交互时引入使用
  - ...mapState(['stateName']) 相当于 stateName(){return this.$store.state['stateName']}
  - ...mapGetters(['GettersName'])  //GettersName(){return this.$store.GettersName['xxx']}