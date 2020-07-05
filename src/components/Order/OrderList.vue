<template>
  <el-table :data="list" style="width: 100%">
    <el-table-column prop="orderId" label="订单号" width="180"></el-table-column>
    <el-table-column prop="name" label="产品名称"></el-table-column>
    <el-table-column prop="price" label="价格" width="100"></el-table-column>
    <el-table-column prop="state" label="状态" width="100">
      <template slot-scope="scope">
        <el-tag size="medium" :type="getStateText(scope.row.state).tagStyle">{{ getStateText(scope.row.state).text }}</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

  <script>
export default {
  name: "OrderList",
  props: {
    list: {
      type: Array
    }
  },
  data() {
    return {};
  },
  computed: {
    //  设置状态文本和样式
    getStateText() {
      return function(state) {
        if (state == 0) {
          return {
              text:'进行中',
              tagStyle:'info'
          }
        }else if(state == 1){
            return {
              text:'已完成',
              tagStyle:'success'
          }
        }
      };
    }
  }
};
</script>
  <style lang="sass" scoped>
  
</style>