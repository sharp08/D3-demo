<template>
  <!-- 数字过渡 -->
  <span title="GsapSpan">{{renderValue}}</span>
</template>

<script>
// https://cn.vuejs.org/v2/guide/transitioning-state.html#%E7%8A%B6%E6%80%81%E5%8A%A8%E7%94%BB%E4%B8%8E%E4%BE%A6%E5%90%AC%E5%99%A8

import { gsap } from "gsap"

export default {
  name: "GsapSpan",
  components: {},
  props: {
    value: {
      type: Number
    },
    precision: {
      type: Number,
      default: 2
    },
    duration: {
      type: Number,
      default: 0.5
    }
  },
  data() {
    return {
      tweenValue: null //  中间值
    }
  },
  mounted() {},
  computed: {
    // 展示值
    renderValue() {
      if (this.tweenValue) {
        return this.tweenValue.toFixed(this.precision)
      } else {
        return null
      }
    }
  },
  watch: {
    value: {
      handler(newVal) {
        gsap.to(this.$data, { duration: this.duration, tweenValue: newVal })
      }
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
</style>