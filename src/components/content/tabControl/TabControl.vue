<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles"
      :key="index"
      class="tab-control-item"
      @click="tabClick(index)"
    >
      <span :class="{active : index == currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    tabClick(i) {
      this.currentIndex = i;
      /* console.log(this.refs); //  undefined   这里只是组件的定义，该组件并没有称为父组件。所以没有refs,这里的this 指向当前组件对象
      this.$refs.tabcontrol2.currentIndex = i;
      this.$refs.tabcontrol1.currentIndex = i;*/
      this.$emit("changeType", i);
    }
  },
  components: {}
};
</script>

<style scoped>
.active {
  /* 给点击的元素添加文字颜色和底部边框 */
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}
.tab-control {
  display: flex;
  text-align: center;
  font-size: 14px;
  background: #fff;
  z-index: 201;
}
.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.tab-control-item span {
  padding: 5px;
}
</style>
