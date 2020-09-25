<template>
  <!-- 区域内拖拽 -->
  <div class="drag-container" title="Drag">
    <div class="drag-block" ref="drag-block">
      <div class="handler" ref="handler"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Drag",
  components: {},
  props: {},
  data() {
    return {}
  },
  mounted() {
    const moveElement = this.$refs["drag-block"] //  拖拽运动的元素
    const dragElement = this.$refs["handler"] //  拖拽的把手

    dragElement.onmousedown = e => {
      const x = moveElement.offsetLeft - e.clientX
      const y = moveElement.offsetTop - e.clientY
      dragElement.style.cursor = "grabbing"

      document.onmousemove = e => {
        document.body.style.cursor = "grabbing"
        // 限制拖拽范围
        let h = e.clientX + x
        if (h > 192) {
          h = 192
        } else if (h < 0) {
          h = 0
        }

        let v = e.clientY + y
        if (v > 192) {
          v = 192
        } else if (v < 0) {
          v = 0
        }
        moveElement.style.left = h + "px"
        moveElement.style.top = v + "px"
      }
      document.onmouseup = e => {
        document.body.style.cursor = null
        dragElement.style.cursor = "grab"
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  },
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style scoped lang="less">
@import url(./Drag);
</style>