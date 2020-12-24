<template>
  <div class="body">
    <Item v-for="(l,index) of list" :key="index" :index="index" :l="l"  ></Item>
  </div>
</template>
<script>
  import Item  from './item'
  export default{
    components:{
      Item
    },
    props:{
      list:Array,
      //dellist:Function
    }
  }
</script>
<style scoped>
  div.body{
    margin-top:20px;
    margin-bottom:20px;
  }

</style>
