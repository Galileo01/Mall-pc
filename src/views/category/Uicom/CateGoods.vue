<template>
  <div class="cate-goods" v-if="goods">
   <goods-list :goods="goods" v-if="goods" ></goods-list>
  </div>
</template>

<script>
import GoodsList from "components/content/goodslist/GoodsList";
export default {
 name:"CateGoods",
 components:{
     GoodsList
 },
 props:{
     goods:Array
 },
 created(){
     console.log(this.goods);
     
 }
}
</script>

<style>
.cate-goods{
    width: 1200px;
    margin-top: 30px;
}
</style>