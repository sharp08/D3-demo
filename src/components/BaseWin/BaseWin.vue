<template>
  <div class="base-win" ref="base-win" v-show="visible">
    <!-- 背景区 -->
    <!-- <div @click="handleClickMask" class="mask">
      <slot name="mask"></slot>
    </div>-->
    <!-- 主内容区 -->
    <div :style="positionStyle" class="main" ref="main">
      <slot name="top">
        <div class="top">top</div>
      </slot>
      <slot name="mid">
        <div class="mid">mid</div>
      </slot>
      <slot name="btm">
        <div class="btm">
          <button @click="handleVisible">确认</button>
          <button @click="visible=false">关闭</button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseWin",
  components: {},
  props: {},
  data() {
    return {
      visible: true,
      key: null,
      position: ["center", "100px"], //  水平方向 ，垂直方向（创建时会在外部把这个值覆盖）
      positionStyle: {}
    }
  },
  mounted() {
    // 监听 main 元素
    this.ro = new ResizeObserver(entries => {
      const { height, width } = entries[0].contentRect

      // 根据 position 参数控制弹窗位置
      if (this.position.length === 2) {
        const left =
          this.position[0] === "center"
            ? `calc(50% - ${width / 2}px)`
            : this.position[0]

        const top =
          this.position[1] === "center"
            ? `calc(50% - ${height / 2}px)`
            : this.position[1]

        this.positionStyle = {
          left,
          top
        }
      } else {
        console.warn("position 参数的格式不正确")
      }
    })
    this.ro.observe(this.$refs["main"])
  },
  beforeDestroy() {
    this.ro.disconnect()
    this.ro = null
  },
  computed: {
    // positionStyle() {
    //   if (this.$refs["main"]) {
    //     console.log(
    //       this.$refs["main"].clientHeight,
    //       this.$refs["main"].clientWidth
    //     )
    //   }
    //   if (this.position === "center") {
    //     return {
    //       left: "50%",
    //       top: "50%",
    //       transform: "translate(-50%,-50%)"
    //     }
    //   } else {
    //   }
    // }
  },
  watch: {},
  methods: {
    handleClickMask() {
      console.log("背景")
    },
    handleVisible(bool) {
      console.log(bool)
    }
  }
}
</script>

<style scoped lang="less">
@import url(./BaseWin.less);
</style>