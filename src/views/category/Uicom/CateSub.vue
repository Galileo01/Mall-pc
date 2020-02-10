<template>
  <div class="cate-sub">
   <div class="item-wapper">
      
       <a :href="value.link"  v-for="(value,index) in subCategory" :key="index">
          <div class="item-text">{{value.title}}</div>
        </a>
   </div>
  </div>
</template>

<script>
export default {
 name:"CateSub",
 props:{
     subCategory:Array
 }
}
</script>

<style scoped>
.item-wapper{
    display:flex;
    flex-wrap:wrap;
    padding-left: 20px;
}
.cate-sub a{
  text-decoration: none;
  color: #333;
  height: 30px;
  line-height: 30px;
  width: 100px;
  font-size: 12px;
}


</style>