<template>
  <div class="box">
    <span>关于 preserveAspectRatio，viewBox 的理解方式：</span>
    <ul>
      <li>先画一个 400*200 的画布，取名 A；</li>
      <li>在画布（10,10）的位置画一个 80*80 的小方块，取名 B</li>
      <li>在画布上标好 100*100 的区域，取名为 C</li>
      <li>如果是【meet】，在保持C自身比例不变的情况下，将C沿着 Y 轴铺满 A</li>
      <li>如果是【slice】，在保持C自身比例不变的情况下，将C沿着 X 轴铺满 A</li>
      <li>如果是【none】，将 C 沿着 XY 轴铺满 A，此时视觉上，C 的比例会发生变化</li>
    </ul>

    <svg
      height="200"
      preserveAspectRatio="xMinYMin meet"
      style="border:1px solid #cd0000;"
      viewBox="0 0 100 100"
      width="400"
    >
      <rect fill="#cd0000" height="80" width="80" x="10" y="10" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "SVGViewBox",
  components: {},
  props: {},
  data() {
    return {}
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style scoped lang="less">
.box {
  border: 4px solid #ed4014;
  float: left;
  padding: 10px;
}
</style>