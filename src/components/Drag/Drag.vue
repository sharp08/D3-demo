<template>
  <!-- 区域内拖拽 -->
  <div class="drag-container" title="Drag">
    <div class="drag-block" ref="drag-block">
      <div class="handler" ref="handler"></div>
    </div>
    <button @click="handleCenter">居中</button>
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

    // offset 版
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

    // transform 版
    // dragElement.onmousedown = e => {
    //   const x = e.clientX
    //   const y = e.clientY
    //   dragElement.style.cursor = "grabbing"
    //   const arr = moveElement.style.transform.match(/\d+/g) || [0, 0]

    //   document.onmousemove = e => {
    //     document.body.style.cursor = "grabbing"
    //     let xAxis = e.clientX - x + Number(arr[0])
    //     let yAxis = e.clientY - y + Number(arr[1])
    //     moveElement.style.transform = `translate(${xAxis}px,${yAxis}px)`
    //   }
    //   document.onmouseup = e => {
    //     document.body.style.cursor = null
    //     dragElement.style.cursor = "grab"
    //     document.onmousemove = null
    //     document.onmouseup = null
    //   }
    // }
  },
  computed: {},
  watch: {},
  methods: {
    // 此处想实现手动居中不能使用 transform，否则居中后再拖拽会有问题
    handleCenter() {
      const clientWidth = this.$refs["drag-block"].clientWidth
      const clientHeight = this.$refs["drag-block"].clientHeight

      this.$refs["drag-block"].style.left = `calc(50% - ${clientWidth / 2}px)`
      this.$refs["drag-block"].style.top = `calc(100px - ${clientHeight / 2}px)`
    }
  }
}
</script>

<style scoped lang="less">
@import url(./Drag);
</style>