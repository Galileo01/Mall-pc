<template>
  <div
    class="cart-list-item"
    :class="{'checked-style':isChecked}"
  >
    <input
      type="checkbox"
      :checked="isChecked"
      class="choice"
      @click="changecheck"
    >
    <img
      :src="good.image"
      alt=""
    >
    <div class="info">
      <p class="title">{{good.title}}</p>
      <div class="price">￥{{good.price}}</div>
      <div class="count">
        <button
          class="dec"
          @click="dec"
          :disabled="good.count===1"
        >-</button><span>{{good.count}}</span>
        <button
          class="inc"
          @click="inc"
        >+</button>
      </div>
      <div class="calc">￥{{calcPrice}}</div>
      <div class="delete" @click="deleteFun">删除</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartListItem",
  props: {
    good: Object,
    index: Number //当前 商品在cartList 里的下标
  },
  data() {
    return {
      
    };
  },
  computed: {
    calcPrice() {
      const prices=this.good.price * this.good.count;
      return parseFloat(prices.toFixed(2));
    },
    isChecked()
    {
      return this.good.checked;
    }
  },
  methods: {
    dec() {
      if (this.good.count === 1)
        //最低个数为1
        return;
      else {
        this.$store.commit("decCount", this.index);
      }
    },
    inc() {
      this.$store.commit("addCount", this.index);
    },
    changecheck(){
      
        this.$store.commit('changeCheck',{
          'index':this.index,
          'pre':this.isChecked
        })
     
    },
    deleteFun(){
      this.$store.commit('removeItem',this.index);
    }

  }
};
</script>

<style scoped>
.cart-list-item {
  height: 140px;
  width: 100%;
  margin: 8px 0;
  padding: 0 10px;
  display: flex;
}
.checked-style {
  background: #fff4e8;
}
.cart-list-item .choice {
  height: 16px;
  margin: 62px 0;
  margin-right: 10px;
}
.cart-list-item img {
  height: 80px;
  width: 80px;
  margin: 30px 0;
}
.info {
  display: flex;
  font-size: 12px;
  height: 40px;
  margin: 50px 0;
}
.info .title {
  font-size: 12px;
  width: 200px;
  height: 40px;
  margin-left: 50px;
  cursor: pointer;
}
.info .title:hover {
  color: #e2231a;
}
.info .price {
  font-size: 12px;
  margin-left: 100px;
  width: 50px;
}
.count {
  margin-left: 100px;
  display: flex;
  height: 18px;
  line-height: 18px;
  width: 100px;
}
.count span {
  width: 20px;
  text-align: center;
}
.dec,
.inc {
  border: 1px solid #cacbcb;

  height: 18px;
  line-height: 18px;
  padding: 1px 0;
  width: 18px;
  text-align: center;
  color: #666;
  margin: 0;
  background: #fff;
  outline: none;
  cursor: pointer;
}
.calc {
  margin-left: 100px;
  width: 50px;
}
.delete {
  cursor: pointer;
  margin-left: 100px;
}
.delete:hover {
  color: #e2231a;
}
</style>