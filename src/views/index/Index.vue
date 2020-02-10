<template>
  <div class="index">
    <!-- <router-link to="/index/home">home</router-link>
    <router-link to="/index/cart">cart</router-link>
    <router-link to="/index/detail">detail</router-link> -->
    <index-nav v-show="isshowNav"></index-nav>
    
    
    <div class="view">
      <keep-alive exclude="Login,Detail,Category"><router-view></router-view></keep-alive>
    </div>
  </div>
  
</template>

<script>
import IndexNav from './Uicom/IndexNav'
export default {
  name: "Index",
  components:{
    IndexNav
  },
  computed:{
    isshowNav(){
      return this.$store.state.isshowNav;
    }
  }
  
};
</script>

<style>
.view{
  margin-top: 100px;
  width: 100%;
}
</style>