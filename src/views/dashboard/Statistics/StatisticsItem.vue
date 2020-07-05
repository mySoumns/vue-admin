<template>
  <el-col :span="6">
    <el-card shadow="always">
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">
          <SvgIcon :icon="item.icon" />
        </el-col>
        <el-col :span="18" class='info'>
          <div class="statistics-title">{{ item.title }}</div>
          <div class="statistics-num">{{ item.num }}</div>
        </el-col>
      </el-row>
    </el-card>
  </el-col>
</template>

<script>
import SvgIcon from "@/components/SvgIcon";
export default {
  name: "StatisticsItem",
  components: {
    SvgIcon
  },
  props: {
    item: {
      type: Object
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.icon {
  width: 3em;
  height: 3em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.info {
  text-align: right;
}
.statistics-title {
  line-height: 18px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
  margin-bottom: 12px;
}
.statistics-num {
  font-size: 20px;
}
</style>