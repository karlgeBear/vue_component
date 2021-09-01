<template>
  <ul class="todo-main">
  <li :style="{background:bgColor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="confirmdelete">删除</button>
  </li>
  </ul>
</template>

<script>
export default {
  //声明接收属性 ： 指定属性名/属性值得类型
  props:{  //对象语法，提供验证
    todo:{
      type: Object
    },
    index: Number
  },
  data(){
    return {
      bgColor: 'white',
      isShow: false
    }
  },
  methods: {
    handleEnter(isEnter){
      if(isEnter){
        this.bgColor = '#aaaaaa',
        this.isShow = isEnter
      }else {
        this.bgColor = 'white',
        this.isShow = isEnter
      }
    },
    //确定是否删除items
    confirmdelete(){
      if(!confirm('确定删除吗')){
        return
      }
      // this.deletetodo(this.index)
      //自定义事件
      this.$globalEventBus.$emit('deletetodo',this.index)
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>