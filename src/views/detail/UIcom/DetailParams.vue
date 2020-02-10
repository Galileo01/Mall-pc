<template>
  <div v-if="Object.keys(itemParams).length!==0" class="params">
      
      <p class="title">商品参数</p>
      <table  class="info">
          <tr v-for="(value,index) in itemParams.info.set" :key="index+10">
              <td class="key">{{value.key}}</td>
              <td class="value">{{value.value}}</td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
    name:"DetailParams",
    props:{
        itemParams:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
.info{
      border-collapse: collapse;
}

.title{
    font-size: 18px;
    margin-left: 10px;
}
.params{
    padding: 8px;
}
.info{
   width: 100%;
   margin-top: 20px;
}
.info td{
    height: 20px;
    border: 1px solid #eee;
    padding: 10px 0 0 10px;
    color: #666;
    font-size: 12px;
}
.info tr{
     height: 20px;
}
.info  .key{
       width: 45px;
}


</style>