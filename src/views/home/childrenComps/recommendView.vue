<template>
  <div class="recommend">
    <div v-for="(item,index)  in recommends" :key="index" class="recommend_item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.recommend {
  padding: 10px 0 20px;
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  border-bottom: 10px solid #eee;
}
.recommend_item {
  flex: 1;
}
.recommend_item img {
  width: 75px;
  height: 75px;
  margin-bottom: 10px;
}
</style>
