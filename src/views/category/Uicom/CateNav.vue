<template>
  <div class="cate-nav" >
    <ul>
      <li
        v-for="(value,index) in categories"
        :key="index"
        class="nav-li"
        :class="{
            current:curIndex===index
        }"
        @click="itemClick(index)"
      >{{value.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CateNav",
  props: {
    categories: {
      type: Array,
      default() {
        return [];
      }
    },
    startIndex:Number
  },
  data() {
    return {
      curIndex: this.startIndex
    };
  },
  methods:{
      itemClick(index)
      {
          console.log(index);
          
          this.curIndex=index;
          this.$emit('itemchange',index);
      }
  },created(){
       this.curIndex = parseInt(this.$route.params.index) || 0;
    //    console.log(typeof this.$route.params.index); //sring 类型
       
  }

};
</script>

<style scoped>
.cate-nav {
  width: 100%;
}
.cate-nav ul {
  padding-left: 20px;
  margin-left: 20px;
  height: 40px;
  display: flex;
  list-style: none;
  width: 1200px;
  margin: 0 auto;
  border: 1px solid #e5e5e5;
  background-color: #fafafa;
}
.nav-li {
  width: 65px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
}
.current {
  font-weight: 700;
  color: var(--color-high-text);
  background-color: #fff;
   border: 1px solid #e5e5e5;
  border-top: 3px solid var(--color-high-text);
 border-bottom: none;
  box-sizing: border-box;
}
</style>