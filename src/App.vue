<template>
<!-- 组件对象中找数据：找组件对象（小的vm） -->
  <div cl:ss="todo-container">
    <div class="todo-wrap">
      <!-- <Header :addtodo="addtodo"/>  -->
      <!-- <Header @addtodo="addtodo"/> -->
      <Header ref="header"/> 
      <List :todos="todos"/>
      <Footer :todos="todos" :checkAll="checkAll" :clearChecked="clearChecked"/>
    </div>
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/Header.vue'
import List from '@/components/List.vue'
import Footer from '@/components/Footer.vue'
import {saveTodos,getTodos} from './utils/storageUtils'
//import * as storageUtils from './utils/storageUtils'
export default {
  data() {
    return {
      todos: [
        // {id:1, title:'吃饭', complete:false},
        // {id:2, title:'睡觉', complete:true},
        // {id:3, title:'吃敲代码', complete:false}
      ]
    }
  },
  beforeCreate(){
    /* 
    Vue的原型对象只有一个
    组件对象的原型是：每个组件对象都有自己的原型对象vm
    可以在Vue的原型对象添加一个东西 ==> 所有组件对象可见
    */
    this.__proto__.aaa = 1  //在别的组件对象的原型对象找不到
    this.__proto__.__proto__.bbb = 2  //在别的组件对象的原型对象可以找到
  },
  //异步读取localstorge的todos_key
  mounted() {
    //通过$vm绑定自定义事件监听
    this.$globalEventBus.$on('deletetodo',this.deletetodo)

    //给<Header/>组件对象绑定自定义事件监听
    /* 要求：绑定自定义事件监听和分发事件的组件对象得是同一个 */
    this.$refs.header.$on("addtodo",this.addtodo)

    setTimeout(() => {
      // this.todos = JSON.parse(localStorage.getItem('todos_key')) || [] //如果没有存在之，返回的null
      //this.todos = JSON.parse(localStorage.getItem('todos_key') || '[]')  //如果没有存在之，返回的null
      this.todos = getTodos()
    }, 1000)
  },
  beforeDestroy(){
    //解绑自定义事件监听
    this.$refs.header.$off('addtodo')
    this.$globalEventBus.$off('deletetodo')
  },
  methods: {  //所有的方法都会成为组件对象的方法
    addtodo(value){
      this.todos.unshift(value)
    },
    //click删除列表选项
    deletetodo(index) {
      this.todos.splice(index,1)
    },
    //全选和全不选
    checkAll(isCheck){
      this.todos.forEach(todo => todo.complete = isCheck)
    },
    //删除已选中的
    clearChecked() {
      this.todos = this.todos.filter(todo => todo.complete !== true)
    }
  },
  watch: {
    todos: {
/*       handler(value){  //value是todos改变后最新的值
        //将value以json格式存在local
        //localStorage.setItem('todos_key',JSON.stringify(value))
        saveTodos(value)
      }, */
      handler: saveTodos,
      deep: true //深度监视
    }
  },
  components:{
    Header,
    List,
    Footer
  },
}
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>