<template>
  <div class="index-nav ">
<nav-bar class="nav-bar">
  <img src="~assets/img/common/logo.png" alt="" slot="left" class="log" @click="goHome">
 <index-search slot="center"></index-search>
 <index-tool slot="right"></index-tool>
</nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import IndexSearch from './IndexSearch'
import IndexTool from './IndexTool'
export default {
  name: "IndexNav",
  components:{
    NavBar,
    IndexSearch,
    IndexTool
  },
  methods:{
    goHome(){
     if(!this.$route.path.includes('home'))
     {
       this.$router.push('/index/home');
     }
      
    },
    
    
  }
};
</script>

<style>
.index-nav{
 position: fixed;
 top: 0px;
 z-index: 1;
 background-color: #fff;
 left: 50%;
 transform: translate(-50%,0);
 width: 100%;
}
.nav-in-detail{
  position: static;
  transform: none;
}
 .nav-bar{
    width: 1230px;
    margin:0 auto;
 }
.log{
  width: 130px;
  height:100px;
}
</style>