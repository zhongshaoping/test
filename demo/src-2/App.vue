<template>
    <div>
      <div v-if="!url">loading</div>
      <div v-else>most star repo is <a :href="url">{{name}}</a></div>
    </div>
</template>
<!--
  绑定事件监听----订阅消息
  触发事件 --发布消息  
-->
<script>

export default {
  name: 'App',
 
  data(){
    return {
      url:"",
      name:""
    }
  },
  mounted(){
    //发送请求获取数据
    const url="https://api.github.com/search/repositories?q=v&sort=stars";
   /* this.$http.get(url).then(
      (res)=>{
      var obj=res.data;
      var list=obj.items[0];
      this.url=list.html_url;
      this.name=list.name;
    },
    res=>{
      alert("请求失败")
    }
    )*/
    this.axios.get(url).then(
      (res)=>{
      var obj=res.data;
      var list=obj.items[0];
      this.url=list.html_url;
      this.name=list.name;
    },
    res=>{
      alert("请求失败")
    }
    
    )
  }
  
}
</script>

<style>
  *{margin:0;padding:0}


</style>
