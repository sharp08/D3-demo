<template>
  <div class="cube-demo">
    <Cube />
  </div>
</template>

<script>
import Cube from "./components/Cube"

export default {
  name: "CubeDemo",
  components: {
    Cube
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
@import url(./CubeDemo.less);
</style>