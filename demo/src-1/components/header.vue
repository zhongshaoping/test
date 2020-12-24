<template>
  <div class="header">
    <input type="text" v-model="name" placeholder="请输入你的任务名称，按回车键确认" id="d1" @keyup.enter="add">
  </div>
</template>
<script>
  export default{
    props:{
      //addlist:Function
    },
    data(){
      return {
          name:""
      }
    },
    methods:{
      add(){
        //this.addlist(this.name);
        this.$emit('addlist',this.name)
        
        this.name="";
      }
    }
  }
</script>
<style scoped>
  div.header input{
    width:100%;
    height:30px;
    border:1px solid #aaa;
  }
  div.header input:focus{
    border:1px solid #aaa;
    background-color:#fff;
    outline: 0;

  }
</style>
