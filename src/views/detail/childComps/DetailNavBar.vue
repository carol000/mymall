<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="goback">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="title">
        <div
          class="title-item"
          v-for="(item,index) in titles"
          :key="index"
          :class="{active: index == currentIndex}"
          @click="titleClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
    goback() {
      this.$router.go(-1);
    }
  },
  components: {
    NavBar
  }
};
</script>

<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
  font-size: 14px;
}
.active {
  color: var(--color-high-text);
}
.back img {
  margin-top: 12px;
}
</style>
