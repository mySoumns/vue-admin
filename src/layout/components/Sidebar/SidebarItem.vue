<template>
  <div v-if="item.children !== undefined && item.children.length > 0">
    <template v-if="item.children.length===1 && !item.children[0].children">
      <el-menu-item :index="`${item.path}${item.children[0].path ? `/${item.children[0].path}` :''}`">
        <i class="el-icon-menu"></i>
        {{item.children[0].meta.title}}
      </el-menu-item>
    </template>

    <el-submenu v-else :index="item.path">
      <template slot="title" v-if="item.meta">
        <i class="el-icon-menu"></i>
        {{item.meta.title}}
      </template>

      <template v-for="child in item.children">
        <sidebar-item
          v-if="child.children !== undefined && child.children.length > 0"
          :item="child"
          :key="child.path"
        />
        <el-menu-item v-else-if="child.meta" :key="child.path" :index="`${item.path}/${child.path}`">
          <i class="el-icon-location"></i>
          {{child.meta.title}}
        </el-menu-item>
      </template>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    item: {
      // type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>