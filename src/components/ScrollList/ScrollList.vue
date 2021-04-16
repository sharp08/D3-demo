<template>
  <div class="scroll-list-demo">
    <div class="like-table">
      <div class="th">
        <div class="tr">
          <div class="td">患者信息</div>
          <div class="td">伤病情分级</div>
          <div class="td">送往医院</div>
          <div class="td">车牌号</div>
        </div>
      </div>
      <div @mouseenter="handleTableMouseenter" @mouseleave="handleOnMouseleave" class="tb" ref="tb">
        <div class="tr" v-for="i in renderList">
          <div class="td">患者信息</div>
          <div class="td">伤病情分级</div>
          <div class="td">送往医院</div>
          <div class="td">车牌号</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 一屏展示的数量必须为整数 displayRowCount，并且 displayRowCount = 容器高度 / 行的高度
export default {
  name: "ScrollList",
  components: {},
  props: {},
  data() {
    return {
      originList: [],
      displayRowCount: 4, // 同时显示的个数
      curScrollTime: 0 //  当前滚动次数
    }
  },
  mounted() {
    this.originList = [...Array(20).keys()]
  },
  computed: {
    renderList() {
      return [...this.originList]
    }
  },
  watch: {
    renderList: {
      handler(newVal, oldVal) {
        if (newVal.length !== oldVal.length) {
          this.curScrollTime = 0 //  只有当渲染列表数发生变化时，重置滚动
          this.handleCalcCurScrollTime(newVal)
        }
      }
    },
    // 监听当前滚动次数，控制表格滚动位置
    curScrollTime: {
      handler(newVal) {
        //  单次滚动的高度
        const oneTimeScrollHeight =
          this.$refs["tb"].clientHeight / this.displayRowCount

        const top = this.curScrollTime * oneTimeScrollHeight
        this.$refs["tb"].scrollTo({
          top,
          behavior: "smooth"
        })
      }
    }
  },
  methods: {
    // 鼠标划入停止滚动
    handleTableMouseenter(e) {
      clearInterval(this.timer)
    },
    // 鼠标离开继续滚动，只有 renderList 发生变化时才会重新从开始滚动，否则继续从上一次的位置滚动
    handleOnMouseleave(e) {
      this.handleCalcCurScrollTime(this.renderList)
    },
    // 处理当前滚动位置
    handleCalcCurScrollTime(list) {
      clearInterval(this.timer)
      const len = list.length
      const ableScrollTime = len - this.displayRowCount //  可以滚动的最大次数

      // 如果数据超过 displayRowCount 则需要滚动
      if (ableScrollTime >= 1) {
        this.timer = setInterval(() => {
          if (this.curScrollTime >= ableScrollTime) {
            this.curScrollTime = 0
          } else {
            this.curScrollTime += 1
          }
        }, 1000)
      }
    }
  }
}
</script>

<style scoped lang="less">
@import url(./ScrollList);
</style>