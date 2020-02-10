<template>
  <div class="cate-con">
    <div class="cons-wapper">
      <div
        v-for="(value,index) in texts"
        :key="index"
        :class="{current:index===curIndex}"
        @click="itemClick(index)"
      >{{value}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CateCon",
  data() {
    return {
      curIndex: 0,
      texts: ["综合", "新品", "销量"]
    };
  },
  methods:{
      itemClick(index){
          this.curIndex=index;
          this.$emit('typechange',index);
      }
  }
};
</script>

<style>
.cate-con {
  border: 1px solid #e5e5e5;
}
.cons-wapper {
  display: flex;
  height: 30px;
}
.cons-wapper div {
  width: 60px;
  height: 20px;
  line-height: 20px;
  font-size: 13px;
  text-align: center;
  border-right: 1px solid #e5e5e5;
  margin: 5px 0;
  cursor: pointer;
}
.current {
  color: var(--color-high-text);
  font-weight: 600;
}
</style>