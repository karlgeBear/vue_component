<template>
      <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认"  @keyup.enter="add" v-model="title"/>
      </div>
</template>

<script type="text/ecmascript">
export default {
/*   props: { //限定了：属性的名称/属性值的类型/属性的必要性
    addtodo: {
       type: Function,
       require: true
     }
   }, */
  data(){
    return { 
      title:''
    }
  },
  mounted(){
    console.log('header mounted()',this)
  },
  methods: {
    add(){
      //清空输入值两边的空格
      const title = this.title.trim()
      if(!title){
        return
      }
      //定义一个添加的对象值，传入
      const todo = {
        id:Date.now,
        title,
        complete:false
      }
      //调用父组件的方法
      //this.addtodo(todo)

      //分发自定义事件(向父组件传递数据，与父组件的绑定监听事件配合使用)
      this.$emit('addtodo',todo)

      //搜索框清空
      this.title = ''
    }
  }
}
</script>

<style scoped> /* scoped:限定样式只对当前组件有效果 */
/* scoped的原理：当前组件的标签会自动添加一个特定的属性，
                样式的选择器也添加了对应的属性选择 ==>  不会匹配其它标签
*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>