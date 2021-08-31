<template>
<!-- 组件对象中找数据：找组件对象（小的vm） -->
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addtodo="addtodo"/>
      <List :todos="todos" :deletetodo="deletetodo"/>
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
  data() {
    return {
      todos: [
        // {id:1, title:'吃饭', complete:false},
        // {id:2, title:'睡觉', complete:true},
        // {id:3, title:'吃敲代码', complete:false}
      ]
    }
  },
  components:{
    Header,
    List,
    Footer
  },
  //异步读取localstorge的todos_key
  mounted() {
    setTimeout(() => {
      // this.todos = JSON.parse(localStorage.getItem('todos_key')) || [] //如果没有存在之，返回的null
      //this.todos = JSON.parse(localStorage.getItem('todos_key') || '[]')  //如果没有存在之，返回的null
      this.todos = getTodos()
    }, 1000)
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
  }
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