<template>
  <div class="home">
    <!-- home -->
    <div class="some-wapper">
      <home-img :data="homeImgData[0]"></home-img>
      <div class="main">
        <home-swiper :swiperImg="swiperImg"
      
        ></home-swiper>
        <home-cate></home-cate>
      </div>
      <home-img :data="homeImgData[1]"></home-img>
    </div>
    <goods-list :goods="showGoods.list" :pricestyle="1"></goods-list>
    <footer class="home-footer"><span>到底了</span></footer>
  </div>
</template>

<script>
//导入子组件
import HomeSwiper from "./Uicom/HomeSwiper";
import HomeCate from "./Uicom/HomeCate";
import HomeImg from "./Uicom/HomeImg";
import GoodsList from "components/content/goodslist/GoodsList";
//导入请求 方式
import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      swiperImg: [],
      showGoods: {
        page: 0,
        list: [],
        type:''
      },
      homeImgData: []
    };
  },
  computed:{
    isshowSwiper(){
      return this.swiperImg.length!==0;
    }
  },
  created() {
    //获取数据
    this._getHomeMultidata();
    this._getHomeGoods();
    //获取 homeimg 所需链接
    this.homeImgData = [
      {
        srcs: [
          "https://s10.mogucdn.com/mlcdn/c45406/190520_1bag70e8cjfdj807k4kbcgg095lia_220x320.gif",
          "https://s5.mogucdn.com/mlcdn/c45406/191202_7d86hch3459h3lej9ablf5b59h3l4_576x1024.jpg_600x999.v1c96.81.webp"
        ],
        hrefs: [
          "https://pc.mogu.com/content/live-list/index.html?acm=3.mce.1_10_1n52s.128036.0.gUBy8rPqUMIVl.pos_0-m_539806-sd_119&ptp=31.v5mL0b.0.0.SjuT3N3m",
          "https://pc.mogu.com/content/brand/1aamcw?brandId=1aamcw&stickyId=126amx4&acm=3.mce.1_5_1aamcw.128238.85381.9ARKsrPqUMPbe.sd_130_115-mid_128238-t_9ARKsrPqUMPbp-pm_078-lc_201&ptp=31.v5mL0b.0.0.SjuT3N3m"
        ]
      },
      {
        srcs: [
          "https://s5.mogucdn.com/mlcdn/c45406/200203_29g558f264kd4b21l59bc44l81hek_576x1024.jpg_600x999.v1c96.81.webp",
          "https://s5.mogucdn.com/mlcdn/c45406/191109_023e9ia35ga7fg58hiebd1f95bb64_640x960.jpg_600x999.v1c96.81.webp"
        ],
        hrefs: [
          "https://pc.mogu.com/content/topic/11c9grwg?tagId=11c9grwg&tagName=%E6%99%92%E6%99%92%E5%AE%85%E5%AE%B6%E5%B7%A5%E4%BD%9C%E5%8F%B0&stickyId=127wbay&acm=3.mce.1_17_11c9grwg.128238..uGG3RrPqUMRt6.sd_130-gi_uGG3RrPqUMRt5-t_uGG3RrPqUMPct-pri_17_11c9grwg&ptp=31.v5mL0b.0.0.SjuT3N3m",
          "https://shop.mogu.com/detail/1mnp6y6?acm=3.mce.1_4_1mnp6y6.128238.82454.0LF9VrPqUMQWh.sd_130_115-mid_128238-c_2_11_542392104_0_0_3-pos_0-pm_001kb781n-lc_201&ptp=31.v5mL0b.0.0.SjuT3N3m"
        ]
      }
    ];
 },mounted(){
   
    //利用交叉 观察器 设置到底加载更多
    const intersectionObserver = new IntersectionObserver((entries)=>{
      // 如果不可见，就返回
      if (entries[0].intersectionRatio <= 0) return;
      //如果 页脚 可见 就 调用函数 加载更多
      this._getHomeGoods(this.showGoods.type);
      console.log("Loaded more items");
    });

    // 开始观察
    intersectionObserver.observe(document.querySelector(".home-footer"));
 
 },
  methods: {
    //获取轮播 图的数据
    _getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.swiperImg = res.data.banner.list;
      });
    },
    _getHomeGoods(type) {
      if (!type) {//如果没有传入 type, 说明是刚刚 进入 页面，第一次 获取
        const types = ["pop", "new", "sell"];
        const number = parseInt(Math.random() * 3); //获取随机 类型
        type = types[number];
        this.showGoods.type=type;//保存 当前类型
      }

      const page = this.showGoods.page + 1; //获取 下一页 page
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.showGoods.list.push(...res.data.list); //利用 扩展 运算符，将数组 扩展 为 参数序列
        this.showGoods.page++;
      });
    }
  },
  components: {
    HomeSwiper,
    HomeCate,
    GoodsList,
    HomeImg
  }
};
</script>

<style>
.some-wapper {
  display: flex;
  margin: 0 auto;
  width: 1200px;
}
.home-footer {
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin: 0 auto;
}
</style>