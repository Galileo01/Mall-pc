<template>
  <div
    class="detail-info"
    v-if="Object.keys(goodsInfo).length!==0"
  >
    <div class="title">
      {{goodsInfo.title}}
    </div>
    <div class="prices">
      <div>
        <div>价格:<span class="old">{{goodsInfo.oldPrice}}</span></div>
      </div>
      <div>
        <div>
          <span>促销价:</span><span class="now">￥{{goodsInfo.price}}</span>
          <span class="sold">{{goodsInfo.columns[0]}}</span>
          <span class="shou">{{goodsInfo.columns[1]}}</span>
        </div>

      </div>
    </div>
    <div class="kefu"><span>客服</span><a href="">联系客服</a>
    </div>
    <div class="db-services">
      <span
        class="info-service-item"
        v-for="index in infoLength-1"
        :key="index"
      >
        <img :src="goodsInfo.service[index-1].icon">
        <span>{{goodsInfo.service[index-1].name}}</span>
      </span>
    </div>
    <div class="buttons">
      <div class="buy">立即购买</div>
      <div class="add" @click="addCart">加入购物车</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  props: {
    goodsInfo: Object
  },
  computed: {
    infoLength() {
      return this.goodsInfo.service.length;
    }
  },
  methods:{
    addCart(){
      this.$emit('addCart');
    }
  }
};
</script>

<style scoped>
.detail-info {
  margin: 0 20px;
  width: 540px;
  /* color: #999; */
  margin-left: 50px;
}
.title {
  font-size: 24px;
  font-weight: 550;
}
.prices {
  margin-top: 10px;
  padding: 3px;
  background-color: #f6f6f6;
  color: #999;
  font-size: 12px;
}
.prices > div {
  margin-top: 10px;
  position: relative;
  height: 30px;
  line-height: 30px;
  display: flex;
}
.old,
.now,
.sold,
.shou {
  position: absolute;
}
.old,
.now {
  left: 80px;
}
.sold {
  right: 80px;
  color: #333;
}
.shou {
  right: 10px;
  color: #333;
}

.old {
  font-size: 15px;
  text-decoration: line-through;
}
.now {
  color: var(--color-high-text);
  font-size: 24px;
}
.buttons {
  text-align: center;
  display: flex;
  margin: 60px 0px 0 10px;
}
.buy {
  width: 200px;
  background: #ef2f23;
  height: 50px;
  line-height: 50px;
  color: #fff;
  margin-right: 20px;
}
.add {
  width: 200px;
  height: 50px;
  line-height: 50px;
  color: #333;
  border: 1px solid #ddd;
  cursor: pointer;
}
.db-services {
  margin: 10px 0 0;
}
.db-services img {
  height: 15px;
}
.db-services span {
  margin-right: 6px;
  color: #999;
  font-size: 14px;
}
.kefu {
  display: flex;
  font-size: 12px;
  margin: 10px 0 0 0;
  height: 40px;
  line-height: 40px;
}
.kefu a {
  display: block;
  color: #333;
  /* text-decoration: none; */
  width: 100px;
  height: 40px;
  font-size: 16px;
  margin-left: 10px;
  text-align: center;
}
</style>