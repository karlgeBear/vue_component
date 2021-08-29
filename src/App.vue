<template>
<!-- 组件对象中找数据：找组件对象（小的vm） -->
  <div class="todo-container">
    <div class="todo-wrap">
      <Header/>
      <List/>
      <Footer/>
    </div>
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/Header.vue'
import List from '@/components/List.vue'
import Footer from '@/components/Footer.vue'
export default {
  methods: {  //所有的方法都会成为组件对象的方法

  },
  components:{
    Header,
    List,
    Footer
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