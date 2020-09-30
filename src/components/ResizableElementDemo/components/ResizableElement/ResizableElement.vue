<template>
  <!-- 可缩放元素 -->
  <div class="resizable-element" ref="resizable" title="ResizableElement">
    <!-- 角落把手 -->
    <div class="corner-handle-bar" ref="corner"></div>
  </div>
</template>

<script>
export default {
  name: "ResizableElement",
  components: {},
  props: {},
  data() {
    return {}
  },
  mounted() {
    this.resizableElement = this.$refs["resizable"] //  需要缩放的元素
    this.corner = this.$refs["corner"] //  右下角把手

    // 拖拽右下角把手
    this.corner.onmousedown = e => {
      this.topDis = this.resizableElement.offsetTop
      this.leftDis = this.resizableElement.offsetLeft
      document.addEventListener("mousemove", this.handleCornerMove)
      document.addEventListener("mouseup", this.handleCornerUp)
    }
  },
  beforeDestroy() {
    this.resizableElement = null
    this.corner = null
    document.removeEventListener("mousemove", this.handleCornerMove)
    document.removeEventListener("mouseup", this.handleCornerUp)
  },
  computed: {},
  watch: {},
  methods: {
    // 右下
    handleCornerMove(e) {
      let w = e.clientX - this.leftDis - 10 //  宽
      let h = e.clientY - this.topDis - 10 //  高

      if (w <= 0) w = 0
      if (h <= 0) h = 0

      this.resizableElement.style.width = w + "px"
      this.resizableElement.style.height = h + "px"
    },
    handleCornerUp(e) {
      document.removeEventListener("mousemove", this.handleCornerMove)
      document.removeEventListener("mouseup", this.handleCornerUp)
      console.log(e)
      this.$emit("onFinishedResize", e)
    }
  }
}
</script>

<style scoped lang="less">
@import url(./ResizableElement);
</style>