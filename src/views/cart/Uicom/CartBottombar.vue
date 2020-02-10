<template>
  <div class="cart-bottombar">
    <div class="bar-wapper">
      <div class="check">
        <input
          type="checkbox"
          name="checkall"
          id="checkall"
          :checked="isCheckAll"
          @click="changeAll"
        >
        <label for="checkall"><span>全选</span></label>

      </div>
      <div class="delete" @click="deleteSome">删除选中商品</div>
      <div class="total-count">已选择<span> {{count}} </span>件商品</div>
      <div class="total-pay">总价 ￥<span>{{totalPay}}</span></div>
      <div class="pay" @click="pay">结算</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartBottombar",
  props:{
      count:Number,
      totalPay:Number,
      isCheckAll:Boolean
  },
  computed:{
    userdata(){
      return this.$store.state.userdata;
    }
  }
  ,methods:{
    changeAll(){
      console.log(this.isCheckedAll);
      
      if(this.isCheckAll)
      {
        this.$store.commit('uncheckAll');
        this.$toast.show('取消全选');
      }
      else{
        this.$store.commit('checkAll');
        this.$toast.show('全选');
      }
    },
    deleteSome(){
      this.$store.commit('removeSome');
      this.$toast.show('移除选中商品');
    },
    pay(){
      if(!this.userdata)
      {
        this.$toast.show('未登录，进入登录界面',2000,()=>{
            this.$router.replace('/index/login');
        });
      
      }else{
        this.$toast.show('进入支付界面.......');
      }
    }
  }
};
</script>

<style scoped>
.cart-bottombar {
  background-color: #fff;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  border: 1px solid #f0f0f0;
  border-width: 1px 0;
  border-top: 1px solid #f0f0f0 \9;
  box-shadow: 0 -1px 8px rgba(0, 1, 1, 0.08);
}
.bar-wapper {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  font-size: 14px;
}
.check {
  height: 20px;
  margin: 15px 0;
  font-size: 12px;
}
.check input {
  height: 12px;
  margin: 4px 6px;
}
.delete {
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  margin: 17px 6px 0 20px;
  cursor: pointer;
}
.delete:hover{
    color: #e2231a;
}
.total-count,.total-pay{
    height: 20px;
    width: 100px;
    margin:15px 0;
}
.total-count{
    margin-left: 500px;
    width: 120px;
}
.total-pay{
    margin-left:40px;
}
.pay{
    width: 100px;
    background: #ef2f23;
    height: 50px;
    line-height: 50px;
    color: #fff;
    margin-left:80px;
    text-align: center;
    cursor: pointer;
}
</style>