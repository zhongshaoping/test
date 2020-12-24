<template>
  <div class="footer">
    <label>
      <!--<input type="checkbox" v-model="isAll">-->
      <slot name="checkAll"></slot>
      <!--<span>已完成{{chosed}}/全部{{list.length}}</span>-->
      <slot name="count"></slot>
    </label>
    <!--<button @click="delchosed" v-show="chosed">删除已完成任务</button>-->
    <slot name="delete"></slot>
  </div>
</template>
<script>
  export default{
    props:{
      /*list:Array,
      selectAll:Function,
      delchose:Function*/
    },
    data(){
      return{
      
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
    methods:{
      choseAll(){
        this.selectAll(this.isAll)
      },
      delchosed(){
        this.delchose()
      }
    }
  }
</script>
<style scoped>
  div.footer{
    border-bottom:1px solid #aaa;
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:40px;
    border:1px solid #aaa;

  }
 div.footer  label{
    margin-left:10px;
  }
  div.footer  label span{
    margin-left:10px;
  }
  div.footer button{
    background-color:red;
    color:#fff;
    border-radius:3px;
    border:1px solid red;
    margin-right:10px;
  }
</style>
