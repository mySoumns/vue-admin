<template>
  <div>
    <el-row :gutter="20">
      <StatisticsItem v-for="(val,key) in itemData" :item="val" :key="key" />
    </el-row>
  </div>
</template>

<script>
import StatisticsItem from "./StatisticsItem";
import { getStatistics } from "@/api/others";
export default {
  name: "Statistics",
  components: {
    StatisticsItem
  },
  data() {
    return {
      itemData: [
        {
          icon: "#iconyonghu",
          title: "用户数",
          name: "userCount",
          num: null
        },
        {
          icon: "#iconziyuanldpi",
          title: "总收入",
          name: "incomeCount",
          num: null
        },
        {
          icon: "#iconxiaoxi",
          title: "消息数",
          name: "massageCount",
          num: null
        },
        {
          icon: "#icongouwuche",
          title: "订单数",
          name: "indentCount",
          num: null
        }
      ]
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      // 请求数据
      getStatistics().then(res => {
        if (res.status == 200) {
          // 给数据加上title 和 icon
          this.itemData = res.data.map((item) => {
            switch (item.name) {
              case "userCount":
                item.title = "用户数";
                item.icon = "#iconyonghu";
                break;
              case "incomeCount":
                item.title = "总收入";
                item.icon = "#iconziyuanldpi";
                break;
              case "massageCount":
                item.title = "消息数";
                item.icon = "#iconxiaoxi";
                break;
              case "indentCount":
                item.title = "订单数";
                item.icon = "#icongouwuche";
                break;
            }
            return item;
          });
        }
      });
    }
  }
};
</script>

<style lang='scss' scoped>
</style>