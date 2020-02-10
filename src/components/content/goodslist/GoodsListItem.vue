<template>
  <div
    class="goods-list-item"
    :class="{temp:pricestyle===1}"
    v-if="Object.keys(good).length!==0"
  >
    <a :href="good.link">
      <img
        v-lazy="showImage"
        alt=""
        @click.prevent="itemClick"
      >
    </a>
    <div :class="{'good-info1':pricestyle===1,'good-info2':pricestyle===2}">
      <p v-if="pricestyle==2">{{good.title}}</p>
      <span class="price">￥{{good.price}}</span>
      <span class="collect">{{good.cfav}}</span>
    </div>
  </div>
</template>

<script>
import { log } from "util";
export default {
  name: "GoodListItem",
  data() {
    return {};
  },
  props: {
    good: {
      type: Object,
      default() {
        return {};
      }
    },
    pricestyle: {
      //价格 展示的样式
      type: Number,
      default: 2
    }
  },
  methods: {
    itemClick() {
      const path = this.$route.path;
      console.log(path);

      //处理不同路由情况下 的 点击 事件
      if (path.includes("home")) {
        //当前 处于 home下
        this.$router.push("detail/" + this.good.iid);
      } else if (
        //位于 category 路由
        path.includes("category")
      ) {
        this.$router.push("/index/detail/" + this.good.iid);
      } 
      
    }
  },
  computed: {
    showImage() {
       return this.good.img || this.good.show&&this.good.show.img||this.good.image; //解决不同页面下，good的结构不同的 问题
    }
  },
  created() {
    // console.log(this.good.image);
  }
};
</script>

<style>
.goods-list-item {
  width: 220px;
  position: relative;
  font-size: 15px;
  text-align: center;
  padding-bottom: 60px;
  position: relative;
  border-radius: 5px;
}
.temp {
  padding-bottom: 30px;
}
.goods-list-item img {
  width: 100%;
  border-radius: 5px;
}
.good-info1 {
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.65);
  color: #fff;
  height: 30px;
  line-height: 30px;
  border-radius: 3px;
  display: none;
}
.goods-list-item:hover .good-info1 {
  display: flex;
}
.good-info1 .price {
  /* color: var(--color-tint); */
  margin-right: 20px;
}
.good-info1 .collect {
  position: relative;
}

.good-info1 .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 8px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}

.good-info2 {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  height: 60px;
}
.good-info2 p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.good-info2 .price {
  color: var(--color-tint);
  margin-right: 20px;
}
.good-info2 .collect {
  position: relative;
}

.good-info2 .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect-style2.svg") 0 0/14px 14px;
}
</style>