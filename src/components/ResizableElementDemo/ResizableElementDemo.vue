<template>
  <!-- 可缩放元素  -->
  <div class="resizable-element-demo" title="ResizableElementDemo">
    <ResizableElement />
  </div>
</template>

<script>
import ResizableElement from "./components/ResizableElement"

export default {
  name: "ResizableElementDemo",
  components: {
    ResizableElement
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
@import url(./ResizableElementDemo);
</style>