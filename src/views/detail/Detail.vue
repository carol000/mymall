<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImgs="topImages"></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import { getDetail, Goods } from "network/detail";
export default {
  props: ["id"],
  name: "Detail",
  data() {
    return {
      topImages: [],
      goods: null
    };
  },
  methods: {
    getDetails(iid) {
      getDetail(iid)
        .then(res => {
          console.log(res.data);
          const data = res.data.result;
          this.topImages = data.itemInfo.topImages;
          this.goods = new Goods(
            data.itemInfo,
            data.columns,
            data.shopInfo.services
          ); //使用对象结构语法赋值
          console.log("--->");
          console.log(this.goods);
        })
        .catch(err => {
          console.log(res);
        });
    }
  },
  mounted() {
    console.log(this.id);
    this.getDetails(this.id);
  },
  components: {
    DetailNavBar,
    DetailSwiper
  }
};
</script>

<style scoped>
</style>
