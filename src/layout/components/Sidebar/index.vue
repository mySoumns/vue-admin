<template>
  <el-aside class="aside">
    <Sidebar :menuList="menuList" />
  </el-aside>
</template>

<script>
import Sidebar from "./Sidebar";
import { getObjArr } from "@/utils/index";

export default {
  name: "",
  components: { Sidebar },
  data() {
    return {
      menuList: [
        {
          path: "/func1", //菜单项所对应的路由路径
          name: "功能1", //菜单项名称
          children: [] //是否有子菜单，若没有，则为[]
        },
        {
          path: "/func2",
          name: "功能2",
          children: []
        },
        {
          path: "/func3",
          name: "功能3",
          children: [
            {
              path: "/func31",
              name: "功能3-1",
              children: []
            },
            {
              path: "/func32",
              name: "功能3-2",
              children: []
            },
            {
              path: "/func33",
              name: "功能3-3",
              children: []
            }
          ]
        }
      ]
    };
  },
  created() {
    this.menuData();
  },
  methods: {
    // 处理菜单数据
    menuData() {
      this.menuList = Array.from(getObjArr("router"));
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.aside {
  width: 240px !important;
  height: 100vh;
  background-color: rgb(84, 92, 100);
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  .el-menu {
    border-right: none;
    background-color: rgb(84, 92, 100);
    text-align: left!important;
  }
}
</style>