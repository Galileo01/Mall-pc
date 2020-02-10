<template>
  <div class="detail" v-if="isGetGoods">
    <div class="info-wapper">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-info
        :goodsInfo="goodsInfo"
        @addCart="addCart"
      ></detail-info>
    </div>
    <div class="content">
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <div class="detail-detail">
        <detail-params
          :itemParams="itemParams"
          ref="params"
        ></detail-params>
        <detail-size
          :itemParams="itemParams"
          ref="size"
        ></detail-size>
        <detail-image
          :detailInfo="detailInfo"
          ref="show"
          @imgloaded="imgloaded"
        ></detail-image>
        <detail-commont
          :commentInfo="commentInfo"
          ref="commont"
        ></detail-commont>
        <p class="title">商品推荐</p>
        <goods-list
          :goods="recommends"
          ref="recommend"
          class="recommend"
          :pricestyle="2"
        ></goods-list>

      </div>
      <detail-aside-nav
        :tops="Tops"
        :Cindex.sync="curNavIndex"
        @addCart="addCart"
      ></detail-aside-nav>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import DetailParams from "./UIcom/DetailParams";
import DetailSwiper from "./UIcom/DetailSwiper";
import DetailInfo from "./UIcom/DetailInfo";

import DetailShopInfo from "./UIcom/DetailShopInfo";
import DetailImage from "./UIcom/DetailImage";
import DetailSize from "./UIcom/DetailSize";
import DetailCommont from "./UIcom/DetailCommont";
import DetailAsideNav from "./UIcom/DetailAsideNav";
import Footer from "components/content/footer/Footer";
import GoodsList from "components/content/goodslist/GoodsList";
import { getDetail, GoodsInfo, getRecommend } from "network/detail";

import { debounce } from "commonjs/utils";

export default {
  name: "Detail",
  data() {
    return {
      iid: "",
      topImages: [], //轮播图
      goodsInfo: {}, //存储 商品文本信息
      shopInfo: {}, //存储 店铺信息
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      recommends: [],
      Tops: [],
      getTops: null,
      curNavIndex: 0, //侧边导航 的当前下标
      scrollHandler: null,
      isGetGoods:false
    };
  },
  methods: {
    getAllData(result) {
      //获取 顶部的轮播 图片
      // console.log(result);

      this.topImages = result.itemInfo.topImages;

      //通过GoodsInfo 对象，构造包含所有需要信息的 对象
      this.goodsInfo = new GoodsInfo(
        result.itemInfo,
        result.columns,
        result.shopInfo.services
      );

      //获取shopInfo
      this.shopInfo = result.shopInfo;
      console.log(result.shopInfo);

      //获取展示效果的 图片
      this.detailInfo = result.detailInfo;

      //获取商品参数
      this.itemParams = result.itemParams;
      //获取评论
      // console.log(result.rate.list);

      this.commentInfo = result.rate.list ? result.rate.list[0] : {};
      // console.log(this.commentInfo);
    },
    imgloaded() {
      //子组件 中图片加载 触发事件 ，获取 垂直距离
      this.getTops();
    },
    addCart() {
      const good = {};
      good.image = this.topImages[0];
      good.title = this.goodsInfo.title;
      good.iid = this.iid;
      good.desc = this.goodsInfo.desc;
      good.price = this.goodsInfo.price;

  //触发一个actions
      this.$store.dispatch("addClick", good)
      .then(res=>{
        this.$toast.show(res);
      })
    }

  },
  created() {
    window.scrollTo(0, 0); //保证 从页面开始浏览
    this.iid = this.$route.params.iid;
    getDetail(this.iid)
    .then(res => {
      const result = res.result;
      // console.log(result);

      this.getAllData(result);
      this.isGetGoods=true;
    })
    .catch(error=>{
      console.log(error);
      this.$toast.show('商品信息请求失败，请刷新或返回上一页')
    });
    //请求详情页 下方的推荐信息

    getRecommend().then(res => {
      console.log(res);
      this.recommends = res.data.list;
    });

    //绑定 防抖函数, 获取 垂直偏移
    this.getTops = debounce(() => {
      this.Tops = []; //每次 添加之前 清空
      this.Tops.push(this.$refs.params.$el.offsetTop);
      this.Tops.push(this.$refs.size.$el.offsetTop);
      this.Tops.push(this.$refs.show.$el.offsetTop);
      this.Tops.push(this.$refs.commont.$el.offsetTop);
      this.Tops.push(this.$refs.recommend.$el.offsetTop);
      console.log(this.Tops);

      this.Tops.push(Number.MAX_VALUE);
      //如果没有评论, 那么[3]的 位置为undefined
      if (!this.Tops[3]) {
        this.Tops[3] = this.Tops[4];
        console.log("no commont");
      }
    }, 400);
    console.log(this.Tops);
    this.scrollHandler = () => {
      const y = window.pageYOffset + 20;
      const length = this.Tops.length;

      for (let i = 0; i < length; i++) {
        if (y >= this.Tops[i] && y <= this.Tops[i + 1]) {
          this.curNavIndex = i;
          break;
        }
      }
    };

    window.addEventListener("scroll", this.scrollHandler);
  },
  components: {
    DetailSwiper,
    DetailInfo,
    DetailParams,
    DetailShopInfo,
    DetailSize,
    DetailImage,
    DetailCommont,
    DetailAsideNav,
    GoodsList,
    "my-footer": Footer
  }
};
</script>

<style>
.detail {
  width: 1230px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
}
.info-wapper {
  display: flex;
}
.content {
  width: 1230px;
  margin: 50px auto;
  display: flex;
  border: 1px solid #e5e5e5;
}
.detail-detail {
  width: 740px;
}
.recommend {
  width: 740px;
  margin-left: 0px;
}

.title {
  font-size: 18px;
  margin-left: 10px;
}
</style>