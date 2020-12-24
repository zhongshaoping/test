<template>
  <div @mouseenter="handelEenter(true)" @mouseleave="handelEenter(false)" :style="{backgroundColor:bgcolor}">
    <label><input type="checkbox" v-model="l.status"><span>{{l.name}}</span></label>
    <button v-show="show" @click="del(index)">删除</button>
  </div>
</template>
<script>
  import PubSub from 'pubsub-js'
  export default{
    props: {
      l: Object,
      index: Number,
      //dellist:Function,
    },
    data(){
      return {
        show:false,
        bgcolor:"#fff"
      }
    },
    methods:{
      handelEenter(value){
        if(value){
          this.bgcolor="gray";
          this.show=true;
        }
        else{
          this.bgcolor="#fff";
          this.show=false;
        }
      },
      del(value){
        //this.dellist(value)
        //发布消息
        PubSub.publish('dellist',value)
      }
    }
  }
</script>
<style scoped>
  div{
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:40px;
    border:1px solid #aaa;
    border-bottom:0px;
  }
  div:last-child{
    border-bottom:1px solid #aaa;
  }
  div label{
    margin-left:10px;
  }
  div label span{
    margin-left:10px;
  }
  div button{
    background-color:red;
    color:#fff;
    width:50px;
    border-radius:3px;
    border:1px solid red;
    margin-right:10px;
  }
</style>
