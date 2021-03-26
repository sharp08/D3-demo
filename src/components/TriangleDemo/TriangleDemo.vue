<template>
  <div class="triangle-demo">
    <Triangle />
  </div>
</template>

<script>
import Triangle from "./components/Triangle"

export default {
  name: "TriangleDemo",
  components: {
    Triangle
  },
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
@import url(./TriangleDemo.less);
</style>