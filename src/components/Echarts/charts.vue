<template>
  <div id="myCharts" ref="myCharts" :style="`height:${size.height}`"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "charts",
  props: {
    option: {
      type: Object
    },
    size: {
      type: Object
    }
  },
  data() {
    return {
      chart: ""
    };
  },
  mounted() {
    // 初始化图表
    this.init();
    // 屏幕视图改变重新渲染
    window.onresize = this.chart.resize;
  },
  methods: {
    init() {
      // 获取要渲染的原生
      this.chart = echarts.init(this.$refs.myCharts);
      this.chart.setOption(this.option);
    }
  },
  watch: {
    //  监听图表数据变化重新渲染
    option: {
      handler(newVal, oldVal) {
        if (this.chart) {
          if (newVal) {
            this.chart.setOption(newVal);
          } else {
            this.chart.setOption(oldVal);
          }
        } else {
          this.init();
        }
      },
      deep: true
    }
  }
};
</script>

<style>
</style>