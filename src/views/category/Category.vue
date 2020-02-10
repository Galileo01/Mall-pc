<template>
  <div class="category">
    <div class="cate-wapper">
      <cate-nav
        :categories="category"
        @itemchange="itemchange"
      ></cate-nav>
      <cate-sub :subCategory="subCategory"></cate-sub>
    </div>
    <div class="goods-wapper">
      <cate-con @typechange="typechange">

      </cate-con>
      <cate-goods :goods="CategoryDetail"></cate-goods>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import {
  getAllCategory,
  getSubcategory,
  getCategoryDetail
} from "network/category";

import CateNav from "./Uicom/CateNav";
import CateSub from "./Uicom/CateSub";
import CateCon from "./Uicom/CateCon";
import CateGoods from './Uicom/CateGoods'

import GoodsList from "components/content/goodslist/GoodsList";
import Footer from 'components/content/footer/Footer'
export default {
  name: "Category",
  data() {
    return {
      category: [],
      subCategory: [],
      currentCateIndex: -1, //当前显示的 分类所属下标
      currentDetailType: "", //当前 的详情排版 类型
      CategoryDetail: [] //当前 展示的 详情
    };
  },
  props: {},
  computed: {
    currentCate() {
      return this.category[this.currentCateIndex];
    }
  },
  methods: {
    _getCategory(cateindex) {
      getAllCategory().then(res => {
        const keys = [
          "上衣",
          "裤子",
          "裙子",
          "内衣",
          "男友",
          "包包",
          "运动",
          "家居",
          "母婴"
        ];
        let list = res.data.category.list;
        //过滤 有用数据,, 和home -cate 的数据保持 一致

        list = list.filter(value => {
          return keys.find(item => item === value.title);
        });
        this.category = list;
        this._getSubcategory(cateindex);
      });
    },
    _getSubcategory(index) {
      //确保 要请求的数据和正在显示的 下标不一样再请求
      if (index !== this.currentCateIndex) {
        const maitKey = this.category[index].maitKey;
        this.currentCateIndex = index; //更改 当前下标
        getSubcategory(maitKey).then(res => {
          this.subCategory = res.data.list;
          // console.log("list", res.data.list);

          this._getDetail("pop");
        });
      }
    },
    _getDetail(type) {
      this.currentDetailType = type; //更改类型
      getCategoryDetail(this.currentCate.miniWallkey, type).then(res => {
        // console.log("getDetail", res);
        this.CategoryDetail = res;
      });
    },
    itemchange(index) {
      this._getSubcategory(index);
    },
    typechange(index) {
      const types = ["pop", "new", "sell"];
      const type = types[index];
      this._getDetail(type);
    }
  },
  created() {
    //根据 传入的 subindex  获取subindex
    const cateindex = parseInt(this.$route.params.index) || 0;
    console.log(cateindex);

    // this.currentCateIndex=cateindex;
    this._getCategory(cateindex);
  },
  components: {
    CateNav,
    CateSub,
    CateCon,
    CateGoods,
    GoodsList,
    'my-footer':Footer
  }
};
</script>

<style>
.category {
  width: 100%;
}
.cate-wapper {
  width: 1200px;
  margin: 10px auto;
  border: 1px solid #e5e5e5;
}
.goods-wapper {
  width: 1200px;
  margin: 0 auto;
  border: 1px solid #e5e5e5;
  margin-top: 60px;
}
</style>