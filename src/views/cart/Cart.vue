<template>
  <div class="cart">
    <div class="title">
      <span>Mall</span>
      <div class="cart-log"></div>
    </div>
    <div class="content">
      <cart-list :list="cartList"></cart-list>
      <cart-bottombar
        :count="count"
        :totalPay="totalPay"
        :isCheckAll="isCheckAll"
      ></cart-bottombar>
    </div>
  </div>
</template>

<script>
import CartList from "./Uicom/CartList";
import CartBottombar from "./Uicom/CartBottombar";
import { log } from "util";
export default {
  name: "Cart",
  computed: {
    cartList() {
      return this.$store.state.cartList;
    },
    count() {
      const count = this.cartList
        .filter(value => value.checked)
        .reduce((pre, cur) => {
          return pre + cur.count;
        }, 0);
      console.log(count);

      return count;
    },
    totalPay() {
      const money = this.cartList
       .filter(value => value.checked)
       .reduce((pre, cur) => {
       return pre + cur.count * cur.price;
      }, 0);
      return parseFloat(money.toFixed(2)); //toFixed 方法返回字符串
    },
    isCheckAll(){
      if (this.cartList.length === 0) return false;
      const unChecked = this.cartList.find(value => !value.checked); //查找没有被选中的 元素
      if (unChecked) return false;
      else return true;
    }
  },
  components: {
    CartList,
    CartBottombar
  }
};
</script>

<style>
.cart {
  width: 1200px;
  margin: 0 auto;
}

.title {
  display: flex;
}
.title span {
  vertical-align: middle;
  height: 40px;
  line-height: 40px;
}
.cart-log {
  width: 100px;
  height: 40px;
  background-image: url(https://misc.360buyimg.com/user/cart/widget/header-2017/i/cart-icon.png);
  background-repeat: no-repeat;
  vertical-align: middle;
}
.content {
  border-style: solid;
  border-width: 2px 1px 1px;
  border-color: #aaa #f1f1f1 #f1f1f1;
  background: #fff;
}
</style>