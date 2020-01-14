<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item,index) in  topImgs" :key="index">
      <span>
        <img :src="item" />
      </span>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  props: {
    topImgs: {
      type: Array,
      defaiult() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped>
.detail-swiper {
  height: 280px;
  overflow: hidden;
}
/* .slide img {
  height: 300px;
} */
</style>
