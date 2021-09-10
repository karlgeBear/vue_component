<template>
  <ul>
    <li>ID: {{$route.params.id}}</li>
    <li>Title: {{detail.title}}</li>
    <li>Content: {{detail.content}}</li>
  </ul>
</template>

<script type='text/ecmascript-6'>
  const allMessageDetails = [
      {id:1,title:'message0001',content:'message content001'},
      {id:2,title:'message0002',content:'message content002'},
      {id:4,title:'message0004',content:'message content004'}
    ]
export default {
  data () {
    return {
      detail: {}
    }
  },
  
  /* 
  动态路由匹配
   1.路由组件对象是在第一次请求对应路径时才创建
   2.从一个路由组件离开，路由组件死亡，在进入需要重新创建
   3.当在同一个路由上切换(知识改变了参数)，当前路由组件对象被直接复用
   4.同一个组件对象mounted只执行了一次
   */
  mounted() {
    setTimeout(() => {
      //当前的id
      const id = this.$route.params.id * 1  //字符串类型的number转为Number
      const detail = allMessageDetails.find(detail => detail.id === id)
      this.detail = detail
      console.log(this.detail)
    }, 1000);

  },
  //要对同一组件中的 params 更改做出反应
  watch: {
    $route(to, from) {  //当请求参数发生改变时，内部指定了新的$route(to)属性
      //对路由变化做出响应
      setTimeout(() => {
        //得到当前的id
        const id = to.params.id * 1
        const detail = allMessageDetails.find(detail => detail.id === id)
        this.detail = detail
      }, 1000);
    }
  }
}
</script>
<style scoped>
</style>
