<template>
  <div class="cart-list">
    <div class="list-titles">
      <span class="good">商品</span>
      <span class="price">单价</span>
      <span class="count">数量</span>
      <span class="cal">小计</span>
      <span class="oper">操作</span>
    </div>
    <cart-list-item
      v-for="(value,index) in list"
      :key="index"
      :good="value"
      :index="index"
    ></cart-list-item>
  </div>
</template>

<script>
import CartListItem from "./CartListItem";

export default {
  name: "CartList",
  props: {
    list: Array
  },
  components: {
    CartListItem
  }
};
</script>

<style scoped>
.list-titles{
    width: 100%;
    display: flex;
    height:30px;
    line-height: 30px;
    font-size: 14px;
}
.good{
    margin-left: 40px;
}
.price{
    margin-left:390px;
}
.count{
    margin-left: 120px;
}
.cal{
    margin-left: 180px;
}
.oper{
    margin-left: 120px;
}
</style>