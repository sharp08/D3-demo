<template>
  <div class="border-star">
    <div class="box">
      <div class="star" ref="star">
        <div class="bar"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BorderStar",
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const starDom = this.$refs["star"];
      console.dir(starDom)
      let start;

      function step(timestamp) {
        if (start === undefined) start = timestamp;
        const elapsed = timestamp - start;

        //这里使用`Math.min()`确保元素刚好停在200px的位置。
        starDom.style.transform =
          "translateX(" + Math.min(0.1 * elapsed, 220) + "px)";

        if (elapsed < 5000) {
          // 在两秒后停止动画
          window.requestAnimationFrame(step);
        }
      }

      window.requestAnimationFrame(step);
    },
  },
};
</script>

<style scoped lang="less">
@import url(./BorderStar.less);
</style>