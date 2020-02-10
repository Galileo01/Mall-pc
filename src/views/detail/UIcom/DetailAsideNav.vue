<template>
  <div class="detail-aside-nav">
    <ul>
      <li
        v-for="(value,index) in text"
        :key="index"
        @click="navClick(index)"
        :class="{current:index===Cindex}"
      ><span>{{value}}</span></li>

    </ul>
    <div class="add" @click="addCart">加入购物车</div>
  </div>
</template>

<script>
export default {
  name: "DetailAsideNav",
  props: {
    tops: Array,
    Cindex:Number
  },
  data() {
    return {
      text: ["商品参数", "商品尺寸", "效果展示", "用户评论", "商品推荐"],
    };
  },
  methods: {
    navClick(index) {
      console.log(index);
      
      this.$emit('update',index);
      const y = this.tops[index];
      console.log(y);

      window.scrollTo(0, y);//(x,y)
    },
    addCart(){
    this.$emit('addCart');
  }
  }
};
</script>

<style scoped>
.detail-aside-nav {
  position: sticky;
  top: 100px;
  width: 290px;
  height: 500px;
  border: 1px solid #e5e5e5;
}
.detail-aside-nav ul {
  list-style: none;
  padding: 0;
  padding-left: 40px;
}
.detail-aside-nav li {
  width: 204px;
  display: block;
  height: 30px;
  line-height: 30px;
  margin: 10px 0;
  cursor: pointer;
  text-align: center;

  font-size: 14px;
  color: #666;
}
.detail-aside-nav li:hover {
  background: url(https://s10.mogucdn.com/p1/150914/upload_ie2wgnrtmy4tim3bgmzdambqhayde_204x30.png)
    no-repeat;
  color: #333;
  font-weight: 700;
}
.add {
  width: 200px;
  margin: 0 auto;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #ef2f23;
  color: #fff;
  cursor: pointer;
}
.current {
  background: url(https://s10.mogucdn.com/p1/150914/upload_ie2wgnrtmy4tim3bgmzdambqhayde_204x30.png)
    no-repeat;
  color: #333;
  font-weight: 700;
}
</style>
