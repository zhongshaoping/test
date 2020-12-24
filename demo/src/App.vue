<template>
  <div>
    <mt-button type="default">default</mt-button>
  <mt-button type="primary" @click.native="handleClick">primary</mt-button>
<mt-button type="danger">danger</mt-button>
  </div>
</template>
<!--
  绑定事件监听----订阅消息
  触发事件 --发布消息  
-->
<script>
import {Toast} from 'mint-ui'
export default {
  name: 'App',
  methods:{
    handleClick(){
      Toast("触发了点击事件")
    }
  }  
}
</script>

<style>
  *{margin:0;padding:0}


</style>
