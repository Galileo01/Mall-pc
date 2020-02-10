<template>
  <div class="home-swiper"  v-show="swiperImg.length!==0">

<swiper class="swiper">
    <swiper-item
      v-for="(value,index) in swiperImg"
      :key="index"
    >
      <a :href="value.link">
        <img
          :src="value.image"
          alt=""
          class="item-img"
        >
      </a>
    </swiper-item>

  </swiper>
  
  </div>

</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
     name:"HomeSwiper",
     components:{
         Swiper,
         SwiperItem
     },
     data(){
         return {
            
         }
     },
     props:{
          swiperImg:{
              type:Array,
          }
     },
     mounted(){
       console.log(this.swiperImg);
       
     }
}
</script>

<style scoped>

.home-swiper{
  width: 700px;
  margin: 0 auto;
  margin: 0 30px;
}
.item-img{
  border-radius: 5px;
}

</style>