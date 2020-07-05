<template>
  <el-header class="navbar clear-float">
    <div class="left-menu"></div>
    <!-- 右边 -->
    <div class="right-menu">
      <el-dropdown>
        <span class="el-dropdown-link">
          我的
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>收藏</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
    box-shadow: 0px 1px 1px 1px #ddd;
    .left-menu {
        float: left;
    }
    .right-menu {
        float: right;
        margin-left: auto;
        .el-dropdown-link {
            line-height: 60px;
        }
    }
}
</style>