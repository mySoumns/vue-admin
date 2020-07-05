<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import { getString } from '@/utils/index'
export default {
  name: 'App',
  beforeCreate() {
    // if(!getString("token"))
    // {
    //   this.$router.push({ path: '/login' });
    // }
  },
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.clear-float {
  &::after {
    content: "";
    height: 0;
    overflow: hidden;
    clear: both;
    display: block;
  }
}
</style>
