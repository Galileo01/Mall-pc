<template>
  <div
    class="detail-swiper"
    v-if="Object.keys(topImages).length!==0"
  >
    <swiper>
      <swiper-item
        v-for="value in topImages"
        :key="value.item"
      >
        <img
          :src="value"
          alt=""
        >
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailSwiper",
  props: {
    topImages: Array
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style>
.detail-swiper {
  width: 400px;
  height: 600px;
}
.detail-swiper img {
  width: 400px;
  height: 600px;
}
</style>