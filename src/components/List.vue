<template>
  <ul class="todo-main">
    <Item/>
    <Item/>
    <Item/>
  </ul>
</template>

<script>
import Item from './Item.vue'
export default {
  //必须声明接收属性(pros):指定属性名
  // 接收的属性会自动添加到组件对象上
  components: {
    Item
  }
}
</script>

<style>
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