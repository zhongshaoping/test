<template>
  <div id="app">
    <div>Router Basic-01</div>
    <div class="content">
      <div>
        <router-link to="/about" >about</router-link>
        <router-link to="/home">home</router-link>
      </div>
        <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0;padding:0
}
#app{
  margin:10px auto;
  width:80%;

}
div.content{
  display:flex;
  align-items:center;
  margin-top:20px;
}
div.content{
  width:100%;

}
div.content div{
  display:flex;
  flex-direction:column;
  margin-right:200px;
}
div.content a{
  width:160px;
  height:50px;
  text-decoration:none;
  border:1px solid gray;
  border-bottom:0px;
  text-align:center;
  line-height:50px;
  background-color:#fff;
  outline:0;
  font-size:15px;
}
div.content a.router-link-active{
  background-color:gray;
  color:red;
}
div.content div a:last-child{
  border-bottom:1px solid gray;
}
</style>
