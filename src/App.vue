<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <!--注意这里的exclude里的值是组件的名字而不是路由的名字-->
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "components/content/miantabbar/MainTabBar";
export default {
  name: "app",
  components: {
    MainTabBar
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
