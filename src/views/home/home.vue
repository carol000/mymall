<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <tab-control
      :titles="['流行','新款','精款']"
      @changeType="checkType"
      ref="tabcontrol2"
      class="tab-control"
      v-show="showTopControl"
    />

    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scrollTop="scrollTop"
      @pullingUp="loadMore"
      :pullUpLoad="true"
    >
      <!--这里必须要加： , 不加冒号传的就是字符串不是数字-->
      <!---->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImgLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control :titles="['流行','新款','精款']" @changeType="checkType" ref="tabcontrol1" />
      <good-list :goods="showGoods" />
      <div style="clear:both;"></div>
    </scroll>

    <back-top @click.native="backTop" v-show="showtoTop" />
    <!--.native 监听组件的点击-->
  </div>
</template>

<script>
import { getHomeData, getHomeGoods } from "network/home";

import RecommendView from "views/home/childrenComps/recommendView";

import HomeSwiper from "./childrenComps/HomeSwiper";
import FeatureView from "./childrenComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import TabControl from "components/content/tabControl/TabControl";
import GoodList from "components/content/goods/GoodList";
import BackTop from "components/content/backTop/BackTop";

export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: [],
      type: ["pop", "new", "sell"],
      selectType: "pop",
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      showtoTop: false,
      tabOffsetTop: 0,
      showTopControl: false,
      scrollY: 0
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodList,
    Scroll,
    BackTop
  },
  methods: {
    swiperImgLoad() {
      //  轮播图的加载时间比较慢，等轮播图加载完成其他的图片已经加载完成， 这样计算的高度计较符合实际情况
      //监听轮播图片是否加载完成
      //获取  tabbarControl 距离顶部的距离
      //所有组件都有一个属性$el，用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabcontrol1.$el.offsetTop; //计算  tab-control  距离顶部的距离

      console.log(this.tabOffsetTop);
    },

    /**上拉加载更多*/
    loadMore() {
      console.log("加载更多");
      this.getHomeGoods(this.selectType);
    },

    //监听页面的滚动
    scrollTop(position) {
      // 判断 Backtop是否显示
      this.showtoTop = -position.y > 1000;

      //决定tabControl 是否吸顶（position:fixed）
      this.showTopControl = -position.y > this.tabOffsetTop; //如果滚动距离大于  距离顶部的距离 ， 第二个tabBar就显示
    },

    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500); // 500毫秒
    },
    checkType(index) {
      this.selectType = this.type[index];
      console.log(this.$refs);
      this.$refs.tabcontrol2.currentIndex = index;
      this.$refs.tabcontrol1.currentIndex = index;
      //this.getHomeGoods(this.selectType);
    },
    getHomeData() {
      //加载轮播广告，商品推荐信息
      getHomeData()
        .then(res => {
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
          console.log(res.data.data);
        })
        .catch(err => console.log(err));
    },

    getHomeGoods(type) {
      //加载商品
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then(res => {
          console.log(res);
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page = page;
          this.$refs.scroll.finishPullUp(); //这条语句一定要加上不然不能每次下拉触底加载更多
        })
        .catch(err => console.log(erer));
    },

    debance(func, time) {
      // 防抖函数
      let timer = null; //闭包可以用在对节流函数的封装， 保持只有一个timer对象
      return function(...rest) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, rest); //这里还可以传入参数
        }, time);
      };
    }
  },

  computed: {
    showGoods() {
      return this.goods[this.selectType].list;
    }
  },
  created() {
    //请求多个数据
    this.getHomeData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    var refresh = this.debance(this.$refs.scroll.refresh, 500);
    //关于dom的操作最好放在 mounted里
    this.$bus.$on("itemImageLoad", () => {
      //监听图片加载完成时间，动态的计算scroll的高度
      refresh();
    });
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.scrollY, 0); // 立马回到原来的位置
    this.$refs.scroll.refresh(); //滚动完后一般需要重新刷新一次
    console.log("activated");
  },
  deactivated() {
    this.scrollY = this.$refs.scroll.getScrollY(); //  离开该页面的时候记录本次的滚动距离
    //console.log("deactivated");
  }
};
</script>
<style scoped>
#home {
  height: 100vh; /**vh视口的高度 */
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed; 在使用浏览器原始滚动需要定位， 现在betterScroll  导航不在滚动范围，所以不需要
  left: 0;
  right: 0;
  top: 0;
  z-index: 200; */
}
.content {
  /**用定位解决滚动视图的高度计算问题 */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.fixed {
  position: fixed;
  top: 46px;
  left: 0;
  right: 0;
  z-index: 300;
}
.tab-control {
  position: relative;
  z-index: 9; /**z-index只对定位元素有效 */
}
</style>
