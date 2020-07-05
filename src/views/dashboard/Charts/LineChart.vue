<template>
  <div class="dashboard-line-chart">
    <charts :option="option" :size='size'/>
  </div>
</template>

<script>
import charts from "@/components/Echarts/charts";
import { getExpectedAndActual } from '@/api/others'
export default {
  name: "dashlinechart",
  components: {
    charts
  },
  data() {
    return {
      option: {
        title: {
          show:false
        },
        grid:{
          left:60,
          top:50,
          bottom:50,
          right:30
        },
        tooltip: {
          //鼠标悬浮框的提示文字
          trigger: "axis"
        },
        legend: {
          top:15,
          data: ["期望", "实际"]
        },
        xAxis: [
          {
            //x轴坐标数据
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            //y轴坐标数据
            type: "value",
            axisLabel: {
              formatter: "{value}"
            }
          }
        ],
        series:[
          //驱动图表生成的数据内容数组，几条折现，数组中就会有几个对应对象，来表示对应的折线
          {
            name: "期望",
            smooth: true,
            type: "line", //pie->饼状图  line->折线图  bar->柱状图
            data: [11, 11, 15, 13, 12, 13, 10]
          },
          {
            name: "实际",
            smooth:true,
            type: "line", //pie->饼状图  line->折线图  bar->柱状图
            data: [1, -2, 2, 5, 3, 2, 0]
          }
        ]
      },
      // 配置图表大小
      size:{
        height:'300px',
        witch:'100%'
      }
    };
  },
  created() {
    this.getExpectedAndActualData();
  },
  methods:{
    // 获取期望的和实际的数据
    getExpectedAndActualData(){
      
      getExpectedAndActual().then(res=>{
        
        if(res.status == 200)
        {
          this.option.series[0].data = res.data.expected;
          this.option.series[1].data = res.data.actual;
        }
      })
    }
  },
  watch:{
  }
};
</script>

<style lang='scss' scoped>
.dashboard-line-chart {
  height: 300px;
  background-color: #fff;
  margin-top:20px;
}
</style>