<template>
  <div>
    <h2>{{msg}}</h2>
  </div>
</template>

<script type="text/ecmascript">
export default {
  data (){
    return {
      msg: "HelloWorld!"
    }
  }
}
</script>

<style scoped> /* scoped:限定样式只对当前组件有效果 */
/* scoped的原理：当前组件的标签会自动添加一个特定的属性，
                样式的选择器也添加了对应的属性选择 ==>  不会匹配其它标签
*/
  h2 {
    color:blue
  }
</style>