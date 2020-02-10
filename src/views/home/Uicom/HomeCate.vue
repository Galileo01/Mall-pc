<template>
  <div class="home-cate">
    <div class="wapper">
      <div
        class="item"
        v-for="(value,index) in category"
        :key="index"
        @click="goCate(index)"
      >
        <img
          :src="bgimgSrc[index]"
          alt=""
        >
        <span>{{value}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCate",
  data() {
    return {
      category: [
        "上衣",
        "裤子",
        "裙子",
        "内衣",
        "男友",
        "包包",
        "运动",
        "家居",
        "母婴"
      ],
      bgimgSrc: []
    };
  },
  created() {
    this.getImgSrc();
  },
  methods: {
    getImgSrc() {
      this.bgimgSrc = [
        "https://s10.mogucdn.com/mlcdn/c45406/181031_20c98cekk381c5i3ladb506e8g290_172x172.png",
        "https://s10.mogucdn.com/mlcdn/c45406/190509_722gj5bfh264i38bgja715b239hfa_224x224.png",
        "https://s10.mogucdn.com/mlcdn/c45406/181203_63cg95db7ifbg8e0aj2bfai3ga325_172x172.png",
        "https://s10.mogucdn.com/mlcdn/c45406/181031_56ldahcgfcb306ieceh0f36edga0k_172x172.png",
        "https://s10.mogucdn.com/mlcdn/c45406/190306_6ffi2507dhdicfkj3fcf528aki8ad_224x224.png",
        "https://s10.mogucdn.com/mlcdn/c45406/181031_1fa6a0aj703ek9g6kkc5ek5495ke1_172x172.png",
        "https://s10.mogucdn.com/mlcdn/c45406/200115_4c4k39h204fe7ci213a39gi01hd0a_200x200.png",
        "https://s10.mogucdn.com/mlcdn/c45406/181031_7i219f47fc0ki19f58k5di58f8ae7_172x172.png",
        "https://s10.mogucdn.com/mlcdn/c45406/191126_559hc583k64dhh6ceea6i3246d7hh_172x172.gif"
      ];
    },

    //进入 购物车
    goCate(index){
          this.$router.push('category/'+index);
    }
  }
};
</script>

<style scoped>
.home-cate {
  background-image: url(https://s10.mogucdn.com/mlcdn/c45406/190906_1lf4bh8h7aeaii592edlh9fd6cf18_1420x1113.gif);
  width: 700px;
  height: 279px;
  margin: 0 auto;
  background-size: 100%;
  background-position: top;
  padding-top: 60px;
}
.wapper {
  display: flex;
  flex-wrap: wrap;
}
.item {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  position: relative;
  cursor: pointer;
}
.item img {
  width: 112px;
  height: 112px;
  background-size: 100% 100%;
}
.item span {
  text-align: center;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>