<template>
  <div class="goods_item" @click="itemClick">
    <a href="javascript:;">
      <img :src="gooditem.show.img" alt @load="iamgeLoad" />
    </a>
    <div class="goods-info">
      <p>{{gooditem.title}}</p>
      <span class="price">{{gooditem.price}}</span>
      <span class="colllect">{{gooditem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["gooditem"],
  data() {
    return {};
  },
  methods: {
    iamgeLoad() {
      this.$bus.$emit("itemImageLoad");
    },
    itemClick() {
      console.log("itemClick");
      this.$router.push("/detail/" + this.gooditem.iid);
    }
  },
  components: {}
};
</script>

<style scoped>
.goods_item {
  width: 48%;
  padding-bottom: 40px;
  position: relative;
}
.goods_item img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
}
.goods-info {
  font-size: 2px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info > p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .colllect {
  position: relative;
}
.goods-info .colllect::before {
  content: "";
  position: absolute;
  left: -15px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
