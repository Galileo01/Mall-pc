<template>
  <div class="commont-wapper" v-if="Object.keys(commentInfo).length!==0">
    <div class="words">
      <span>用户评价</span>
      <span>更多<span class="more">></span></span>
    </div>
    <div class="commont">
        <div class="first-line">
          <div class="user">
            <img :src="commentInfo.user.avatar" alt=""><span class="uname">{{commentInfo.user.uname}}</span>
        </div>
        <div class="data">
            <span class="time">{{commentInfo.created|showData}}</span>
           
        </div>
        </div>
        <div class="commont-content">
            <span>{{commentInfo.content}}</span>
             <span class="style">{{commentInfo.style}}</span>
        </div>
        
        <div class="show">
            <img :src="value" alt="" v-for="(value,index) in commentInfo.images" :key="index">
        </div>
    </div>

  </div>
</template>

<script>
import {formatDate} from 'commonjs/utils'
export default {
  name: "DetailCommont",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return;
      }
    }
  },
  filters:{
      showData(data){
                return formatDate(new Date(data*1000),'yyyy-MM-dd hh:mm');
      }
  }
};
</script>

<style>
.commont-wapper{
    margin-bottom: 20px;
    border-bottom: 5px solid #f2f5f8
}
.commont-wapper .words {
  margin: 10px 6px 5px 6px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  color: black;
  border-bottom: 5px solid #f2f5f8
}
.words span:last-child{
    font-size: 14px;
}
.commont{
  margin-left: 20px;
}

.user img{
    height: 36px;
    border-radius: 50%;
    vertical-align: middle;
} 
.user .uname{
    margin-left: 10px;
    height: 36px;
    line-height: 36px;
    vertical-align: middle;
    /* display: inline-block; */
}
.first-line{
  display: flex;
  justify-content: space-between;
}
.commont-content{
    font-size: 14px;
    margin:10px 0 10px 0px;
    color: black;
    display: flex;
    flex-direction: column;
}

.data{
    margin-top: 10px;
    margin-right: 20px;
    font-size: 12px;
    color: #999
}
.style{
    margin-left: 10px;
    margin-top:10px;
    color: #999;
    font-size: 12px;
}
.show{
    margin-top: 10px;
}
.show img {
    width:60px;
    height:60px;
    vertical-align: bottom;
}

</style>