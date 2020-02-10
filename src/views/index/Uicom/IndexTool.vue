<template>
  <div class="index-tool">
     <div class="tool-item">
     <a href="javascript:void;">
         <img src="https://s10.mogucdn.com/mlcdn/c45406/181016_626h76eek6jgl5621492ck0438af3_48x44.png" alt="">
     </a>
     <span>消息</span>
     </div>
     <div class="tool-item">
     <a href="javascript:void;">
         <img src="https://s10.mogucdn.com/mlcdn/c45406/181016_1e18fbc53dab5f8f6c45h6e57954d_44x44.png" alt="">
     </a>
     <span>收藏</span>
     </div>
     <div class="tool-item">
     <a href="javascript:void;" @click="goCart">
         <img src="https://s10.mogucdn.com/mlcdn/c45406/181016_22cba5f6a88gdl2gf42i14hj7flk8_48x46.png" alt="">
     </a>
     <span>购物车</span>
     </div>
     <div class="tool-item">
     <a href="javascript:void;">
         <img src="https://s10.mogucdn.com/mlcdn/c45406/181205_2f1dbgdfffde6147cfl3e09864lge_40x40.png" alt="">
     </a>
     <span>下载APP</span>
     </div>
     <div class="login-button" @click="goLogin" v-if="!isLogined">
         <img src="https://s10.mogucdn.com/mlcdn/c45406/181016_143l3ehl4ebad6c2326gjk6d4h41g_48x48.png" alt="">
        <span>登录</span>
     </div>
     <div class="user-icon" v-if="isLogined">
         <img :src="userdata.usericon">
         <span>{{userdata.username}}</span>
     </div>
  </div>
</template>

<script>
export default {
 name:"IndexTool",
 methods:{
     goCart(){
         this.$router.push('/index/cart');
     },
     goLogin(){
         if(!this.isLogined){
             this.$router.push('/index/login');
         }
     }
 },computed:{
     userdata(){
         return this.$store.state.userdata;
     },
     isLogined(){
         return Object.keys(this.userdata).length!==0;
     }
 }
}
</script>

<style>
.index-tool{
    margin:26px 0;
    display: flex;
 margin-left: 30px;
}
.tool-item{
    display: flex;
    flex-direction: column;
    font-size: 12px;
    margin-right: 24px;
}

.tool-item img{
    margin-bottom: 2px;
    width: 24px;
    height: 24px;
}
.login-button img,.user-icon img{
   height: 30px;
   width: 30px;
   background-size: 100%;
   vertical-align: middle;
   cursor: pointer;
   border-radius: 5px;
}
.login-button span,.user-icon span{
    margin-left: 5px;
    line-height: 30px;
    vertical-align: middle;
    cursor: pointer;
}
</style>