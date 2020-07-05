<template>
  <div class="app-wrapper">
    <Sidebar />
    <el-main class="add-main">
      <Navbar />
      <AppMain />
    </el-main>
  </div>
</template>

<script>
import AppMain from "@/layout/components/AppMain";
import Sidebar from "@/layout/components/Sidebar";
import Navbar from "@/layout/components/Navbar";
export default {
  name: "layout",
  created: function() {
  },
  components: {
    AppMain,
    Sidebar,
    Navbar
  }
};
</script>

<style lang="scss" scoped>
.add-main {
  margin-left: 240px;
  padding: 0;
}
</style>