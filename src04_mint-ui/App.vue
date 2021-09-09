<template>
  <div>
    <mt-button type="danger" style="width:100%" @click="test">测试Mint-ui</mt-button>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui';
  import { MessageBox } from 'mint-ui';
export default {
  methods:{
    test(){
      //alert('测试Mint-ui')
      // Toast({   //text
      //   message: 'Upload Complete',  //输入的文本
      //   position: 'bottom',  //显示在页面的底部
      //   duration: 5000    //在页面显示时长为5秒
      // })
      MessageBox({  //confirm(true)/alert(false)
        title: 'Notice',   //显示的标题
        message: 'Are you sure?',  //
        showCancelButton: false
      })
    }
  }
};
</script>

<style>
</style>