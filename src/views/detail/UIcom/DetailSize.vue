<template>
  <div
    class="detail-size"
    v-if="Object.keys(itemParams).length!==0"
  >
  <p class="title">尺码信息</p>
    <table
      v-for="(item,index) in itemParams.rule.tables"
      :key="index"
      class="rule"
    >
      <tr
        v-for="(it,indey) in item"
        :key="indey"
      >
        <td
          v-for="(value,indez) in it"
          :key="indez"
        >{{value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailSize",
  props: {
    itemParams: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>

.title{
    font-size: 18px;
    margin-left: 10px;
}
table{
    margin-top: 20px;
    margin-left: 10px;
}
.rule {
  border-collapse: collapse;
  font-size: 15px;
}
.rule td {
  height: 20px;
  border: 1px solid #eee;
  padding: 10px 0 0 10px;
  color: #666;
  font-size: 12px;
}
.rule tr {
  height: 42px;
  width: 95px;
  border-bottom: 1px solid #999;
}
</style>