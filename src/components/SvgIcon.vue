<template>
    <svg class="icon" aria-hidden="true">
      <use v-bind:xlink:href="icon" />
    </svg>
</template>

<script>
import '@/assets/js/iconfont';
export default {
  name: "SvgIcon",
  props: {
    icon: {
      type: String,
      default: '#iconyonghu'
    }
  }
};
</script>

<style lang='scss' scoped>
// .icon {
//   width: 5em;
//   height: 5em;
//   vertical-align: -0.15em;
//   fill: currentColor;
//   overflow: hidden;
// }
</style>