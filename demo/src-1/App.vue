<template>
  <div id="app">
    <div class="content">
      <!--<Header  @addlist="addlist"></Header>-->
      <Header ref="test"></Header>
      <Body :list="list"   ></Body>
      <Footer>
        <input type="checkbox" v-model="isAll" slot="checkAll">
        <span slot="count">已完成{{chosed}}/全部{{list.length}}</span>
        <button @click="delchosed" slot="delete" v-show="chosed">删除已完成任务</button>
      </Footer>
    </div>
  </div>
</template>
<!--
  绑定事件监听----订阅消息
  触发事件 --发布消息  
-->
<script>
import PubSub from 'pubsub-js'
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'
import storage from './util/storage'
export default {
  name: 'App',
  components: {
    Header,
    Body,
    Footer
  },
  data(){
    return {
      list:storage.readInfo()
    }
  },
  computed:{
      chosed:function(){
        return this.list.reduce((p,v)=>{return p+(v.status==true?1:0)},0)
      },
      isAll:{
        get(){
          return this.chosed==this.list.length&&this.list.length>0
        },
        set(value){
          this.selectAll(value)
        }
      }
    },
  mounted(){
    this.$refs.test.$on('addlist',this.addlist);
    //订阅消息
    PubSub.subscribe('dellist',(msg,index)=>{
      this.dellist(index)
    })
  },
  methods:{
    choseAll(){
        this.selectAll(this.isAll)
      },
      delchosed(){
        this.delchose()
      },
    addlist(value){
      var obj={'status':false,'name':value};
      this.list.unshift(obj);
    },
    dellist(index){
      this.list.splice(index,1)
    },
    selectAll(value){
      this.list.forEach((p)=>p.status=value)
    },
    delchose(){
      this.list=this.list.filter(p=>!p.status)
    }
  },
 
  watch:{
   list:{
     deep:true,
     handler:storage.saveInfo
   }
  }
}
</script>

<style>
  *{margin:0;padding:0}
  div.content{
    width:800px;
    margin:0 auto;
    border:1px solid #aaa;
    padding:10px;
  }
  div.content button{
    outline:0;
  }



</style>
