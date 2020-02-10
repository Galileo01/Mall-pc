<template>
 <div class="img-wapper"  v-if="Object.keys(data).length!==0">
    <a :href="value" v-for="(value,index) in hrefs" :key="index">
        <img :src="srcs[index]" alt="">
    </a>
  </div>
</template>

<script>
export default {
  name:"HomeImg",
  props:{
      data:Object
  },
 data(){
     return {
         hrefs:this.data.hrefs,
         srcs:this.data.srcs
     }
 }
}
</script>

<style>
.img-wapper{
    display: flex;
    flex-direction: column;
}
.img-wapper img{
    border-radius: 5px;
    margin-bottom: 20px;
    height: 320px;
    width: 220px;
    background-size: 100% 100%;
}
</style>