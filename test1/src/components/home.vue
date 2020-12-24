<template>
   <div class="home">
       <div>这是home</div>
       <div class="content">
           <div class="title">
               <router-link to="/home/new">New</router-link>
               <router-link to="/home/message">Message</router-link>
           </div>
           <div class="main">
               <router-view></router-view>
           </div>
       </div>
   </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>
<style scoped>
    div.home{
        height:162px;
    }
    div.title{
        display:inline-block;
    }
    div.home div.content div.title a{
        border:0px;
    }
    div.title a:last-child{
        margin-left:20px;
    }
</style>