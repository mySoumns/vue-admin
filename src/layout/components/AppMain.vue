<template>
  <div class='app-main'>
      <router-view :key='key' ></router-view>
  </div>
</template>

<script>
export default {
    name:'AppMain',
    computed:{
        key() {
            return this.$route.path
        }
    }
}
</script>

<style lang='scss' scoped>
.app-main {
    padding: 20px 20px;
    background-color: #f7f7f7;
    margin:20px 0px;
}
</style>