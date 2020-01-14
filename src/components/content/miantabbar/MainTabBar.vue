<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#b93358">
      <img src="~assets/img/images/home.svg" slot="item-icon" />
      <img src="~assets/img/images/home (1).svg" slot="item-icon-active" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/categry" activeColor="#b93358">
      <img src="~assets/img/images/category.svg" slot="item-icon" />
      <img src="~assets/img/images/category_active.svg" slot="item-icon-active" />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/order" activeColor="#b93358">
      <img src="~assets/img/images/cart.svg" slot="item-icon" />
      <img src="~assets/img/images/cart_1.svg" slot="item-icon-active" />
      <div slot="item-text">订单</div>
    </tab-bar-item>
    <tab-bar-item path="/my" activeColor="#b93358">
      <img src="~assets/img/images/my.svg" slot="item-icon" />
      <img src="~assets/img/images/my1.svg" slot="item-icon-active" />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/tabbar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "maintabbar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>