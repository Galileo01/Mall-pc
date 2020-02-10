<template>
  <div class="index-search">
    <div class="search-wapper">
      <input
        type="text"
        class="search-input"
        placeholder="外套"
      v-model="searchKey"
      >
      <div class="button"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index-search",
  data(){
    return {
      searchKey:''
    }
  }
};
</script>

<style scoped>
.search-wapper{
  display: flex;
  margin:26px 0;
  margin-left: 160px;
}
.search-input {
  width: 460px;
  height: 48px;
  border: none;
  outline: 0;
  font-size: 14px;
  background: #f7f7f7;
  color: #666;
  border-radius: 5px;
  padding: 0 15px;
}
.button {
  width: 58px;
  height: 48px;
  border: none;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
  background-image: url(https://s10.mogucdn.com/mlcdn/c45406/181205_2llkjh1g0fe27h51ahh5k5f27gkk9_116x96.png);
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>