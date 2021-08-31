<template>
  <ul class="todo-main">
    <Item v-for="todo,index in todos" :key="index" :todo="todo" :deletetodo="deletetodo" :index="index"/>
  </ul>
</template>

<script>
import Item from './Item.vue'
export default {
  //必须声明接收属性(pros):指定属性名
  // 接收的属性会自动添加到组件对象上
  props:['todos','deletetodo'],  //简单语法，Arrary语法
  components: {
    Item
  }
}
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>