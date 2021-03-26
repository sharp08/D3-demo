<template>
  <div class="count-win" ref="count-win">
    <div :style="style" class="count-bg" ref="count-bg">
      <div :key="i" class="count-item" ref="count-item" v-for="i in list">{{i}}</div>
    </div>
  </div>
</template>

<script>
// 不要给 ScrollCount 添加 padding !!
// 不要给 ScrollCount 添加 padding !!
// 不要给 ScrollCount 添加 padding !!

export default {
  name: "ScrollCount",
  props: {
    showNum: {
      default: 0
    }
  },
  data() {
    return {
      list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      winHeight: null
    }
  },
  mounted() {
    // 无论对 ScrollCount 设置的高度为什么单位，clientHeight 都转换成 px
    this.winHeight = this.$refs["count-win"].clientHeight
    // 设置行高
    this.$refs["count-win"].style.lineHeight = this.winHeight + "px"

    this.$refs["count-item"].forEach(item => {
      // 让每行高度等于窗口高度
      item.style.height = this.winHeight + "px"
    })
  },
  computed: {
    style() {
      const transY = -this.winHeight * this.showNum
      return `transform:translateY(${transY}px)`
    }
  },
  watch: {},
  methods: {},
  components: {}
}
</script>

<style scoped lang="less">
@import url(./ScrollCount.less);
</style>