<template>
  <div class="scroll-snap">
    <div class="box1">
      <section class="item">滚动贴合CSS</section>
      <section class="item">滚动贴合CSS</section>
      <section class="item">滚动贴合CSS</section>
      <section class="item">滚动贴合CSS</section>
    </div>
    <div @mousewheel.prevent="onMouseWheel" class="box2" ref="box2">
      <div class="wrap" ref="wrap">
        <section class="item">滚动贴合JS</section>
        <section class="item">滚动贴合JS</section>
        <section class="item">滚动贴合JS</section>
        <section class="item">滚动贴合JS</section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScrollSnap",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    onMouseWheel({ deltaY }) {
      let boxDom = this.$refs["box2"];
      let wrapDom = this.$refs["wrap"];
      // 滚轮向下
      if (deltaY > 0) {
        let top = Math.abs(wrapDom.offsetTop) + boxDom.clientHeight;
        const maxTop = wrapDom.offsetHeight - boxDom.clientHeight;
        top = top > maxTop ? maxTop : top;
        wrapDom.style.top = -top + "px";
      }
      // 滚轮向上
      else {
        let top = Math.abs(wrapDom.offsetTop) - boxDom.clientHeight;
        const minTop = 0;
        top = top < minTop ? minTop : top;
        wrapDom.style.top = -top + "px";
      }
    },
  },
};
</script>

<style scoped lang="less">
@import url(./ScrollSnap.less);
</style>