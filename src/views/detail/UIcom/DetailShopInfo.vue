<template>
  <div class="detail-shop-info">
    <div class="shop-name"><a href="">{{shopInfo.name}}</a></div>
    <div class="shop-as">
      <a href="javascript:void;" class="item">收藏店铺</a>
      <a :href="shopInfo.name" class="item">进入店铺</a>
      <a :href="shopInfo.allGoodsUrl" class="item">所有商品</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: Object
  }
};
</script>

<style>
.detail-shop-info {
  width: 200px;
  height: 180px;
  border: 1px solid #e5e5e5;
  
}
.detail-shop-info a{
    text-decoration: none;
    color: black;
}
.shop-name{
    background: #f6f6f6;
    height: 58px;
    line-height: 58px;
    text-align: center;
    font-size: 14px;
}
.shop-as {
    display:flex;
    flex-wrap: wrap;
    margin-top: 30px;
}
.shop-as .item{
    height:20px;
    line-height: 20px;
    text-align: center;
    font-size: 12px;
    width: 70px;
    border: 1px solid #e5e5e5;
    margin:10px 10px;
}
</style>