<template>
  <div v-if="Object.keys(detailInfo).length!==0">
   <p class="title">穿着效果</p>
    <p class="keys">{{detailInfo.detailImage[0].key}}</p>
   <div class="imags">
      <img :src="value" alt="" v-for="(value,index) in detailInfo.detailImage[0].list" :key="index" @load="imgloaded">
   </div>

  </div>
</template>

<script>
export default {
  name: "DetailImage",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {
        };
      }
    }
  },
  data() {
    return {
      
      }
    }
  ,methods:{
    imgloaded(){
      // this.$bus.$emit('imgloaded');
      this.$emit('imgloaded')
      // console.log(this.$bus);

    },
  }
};
</script>

<style>

.title{
    font-size: 18px;
    margin-left: 10px;
}
.keys{
  margin-top: 30px;
  font-size: 15px;
  text-align: center;
}
.imgs{
  width:740px;
  overflow: hidden;
}
.imags img{
  width: 740px;
  margin-top: 5px;
}
</style>