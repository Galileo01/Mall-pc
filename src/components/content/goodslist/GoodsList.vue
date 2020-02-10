<template>
  <div class="goods">
    <good-list-item
      v-for="(value,key,index) in goods"
      :key="index"
      :good="value"
     :pricestyle="pricestyle"
    >

    </good-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  data(){
    return {
     
    }
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    },
    pricestyle:{
      type:Number,
      default:2
    }
  },
  components: {
    "good-list-item": GoodsListItem
  }
  
};
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly; /*均等分所有的间距 */
  margin: 0 100px;
}
</style>