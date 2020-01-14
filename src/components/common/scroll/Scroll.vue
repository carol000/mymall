<template>
  <div class="wrapper" ref="wrapper">
    <div calss="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  components: {},
  mounted() {
    console.log("1");
    //  创建  betterscroll 对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true, // 默认是false， 那么只有button 的点击事件有效， 设置为true 后 其他元素的点击事件也生效
      probeType: this.probeType, //  当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。如果没有设置该值，其默认值为 0，即不派发 scroll 事件。
      pullUpLoad: this.pullUpLoad
    });
    //

    //监听滚动位置
    if (this.probeType === 2 || this.probeType == 3) {
      this.scroll.on("scroll", position => {
        this.$emit("scrollTop", position);
      });
    }

    //监听上拉事件
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollTo(x, y, time) {
      this.scroll && this.scroll.scrollTo(x, y, time); // 避免scroll对象还没有创建就被别的地方调用
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh(); //当加载的图片来的非常快时就调用 refresh ， this.scroll 还没有挂载完成
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0; // 获取y 轴滚动的位置
    }
  }
};
</script>

<style scoped>
</style>
