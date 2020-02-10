<template>
  <div class="login">
      <login-form class="form"></login-form>
  </div>
</template>

<script>
import LoginForm from './Uicom/LoginForm'
export default {
 name:"Login",
 components:{
   LoginForm,
 },created(){
   this.$store.commit('changeNavShow',false);
 },
 destroyed(){
   if(!this.$store.state.isshowNav)
    this.$store.commit('changeNavShow',true);
    console.log('des');
    
 }
}
</script>

<style scoped>
.login{
  position: relative;
  margin-top:100px;
  width: 100%;
  height: 600px;
  background-image: url(https://s17.mogucdn.com/p2/170105/upload_541i9di2b3icf9j13f24e0bg7b1i6_1920x600.png);
}
.form{
  position: absolute;
  right: 200px;
bottom: 50px;
}
</style>