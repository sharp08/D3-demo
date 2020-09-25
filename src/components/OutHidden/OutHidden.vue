<template>
  <div class="out-hidden-container" title="OutHidden">
    <div class="like-pop" ref="like-pop" v-if="show">
      <div :key="list.text" class="line" v-for="(item,index) in list">
        <span class="label">{{index}}</span>
        <span class="value">{{item.text}}</span>
      </div>
    </div>
    <button @click.stop="handleShowPop" class="btn">{{show?"隐藏":"显示"}}</button>
  </div>
</template>

<script>
/* 
  1.区域外需要给 document 添加 click 事件
  2.通过 contains 判断点击的是否是需要隐藏的元素或其子元素
  3.区域外其他事件需要防止冒泡，否则会再次触发隐藏
 */
export default {
  name: "OutHidden",
  components: {},
  props: {},
  data() {
    return {
      list: [{ text: "乾" }, { text: "坎" }, { text: "艮" }, { text: "震" }],
      show: true
    }
  },
  mounted() {
    document.addEventListener("click", this.handleHiddenPop)
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleHiddenPop)
  },
  computed: {},
  watch: {},
  methods: {
    handleHiddenPop(e) {
      if (
        this.$refs["like-pop"] &&
        !this.$refs["like-pop"].contains(e.target)
      ) {
        this.show = false
      }
    },
    handleShowPop() {
      this.show = !this.show
    }
  }
}
</script>

<style scoped lang="less">
@import url(./OutHidden);
</style>