<template>
<div>
  <h2>{{msg}}</h2>
  <hello-world/>
  <hello-world/>
</div>

</template>

<script>
// import HelloWorld from './components/HelloWorld'
import HelloWorld from '@/components/HelloWorld'
export default {
  //name = 'App'
  data (){
    return {
      msg: 'First Vue Component'
    }
  },
  components:{
    HelloWorld
  }
}
</script>

<style>
  div{
    color: red;
  }
</style>