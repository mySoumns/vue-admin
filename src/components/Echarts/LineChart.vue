<template>
  <div class="line-chart">
    <chart :option="option" />
  </div>
</template>

<script>
import chart from "./chart";
export default {
  naem: "line",
  components:{
      chart
  },
  props:{
      option:{
          type:Object
      }
  }
};
</script>

<style>
</style>