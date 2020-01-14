<template>
  <swiper>
    <swiper-item v-for="(item,index) in  banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt @load="iamgeLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { getHomeData } from "network/home.js";
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLode: false
    };
  },
  methods: {
    iamgeLoad() {
      if (!this.isLode) {
        this.$emit("swiperImageLoad");
        this.isLode = true;
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped>
</style>
