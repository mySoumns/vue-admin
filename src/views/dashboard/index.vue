<template>
  <div>
    <!-- 统计 -->
    <div>
      <Statistics />
    </div>
    <!-- 折现图 -->
    <div>
      <LineChart />
    </div>
    <!-- 订单列表 待办事项 -->
    <div class="list">
      <el-row :gutter="20">
        <el-col :span="16">
          <OrderList />
        </el-col>
        <el-col :span="8">
          <TodoList />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Statistics from "./Statistics/Statistics"
import LineChart from "./Charts/LineChart"
import OrderList from "./Order/OrderList"
import TodoList from "./Todo/TodoList"
export default {
  name: "dashboard",
  components: {
    Statistics,
    LineChart,
    OrderList,
    TodoList
  }
};
</script>

<style lang="scss" scoped>
.list {
  margin-top: 20px;
}
</style>