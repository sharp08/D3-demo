<template>
  <div class="pyramid-demo">
    <Triangle />
  </div>
</template>

<script>
import Triangle from "./components/Triangle"

export default {
  name: "PyramidDemo",
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
@import url(./PyramidDemo.less);
</style>