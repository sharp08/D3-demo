<template>
  <div class="scroll-count-demo">
    <button @click="handleChange">修改数字</button>
    <div class="demo-container">
      <ScrollCount
        :key="index"
        :showNum="num"
        class="singleNum"
        v-for="(num,index) in renderNumStr"
      />
    </div>
  </div>
</template>

<script>
import { RANDOM } from "@pingzi_1227/tool-box"
import ScrollCount from "./components/ScrollCount"

export default {
  name: "ScrollCountDemo",
  props: {},
  components: {
    ScrollCount
  },
  data() {
    return {
      rdm: 0
    }
  },
  computed: {
    renderNumStr() {
      const list = (this.rdm + "").split("").map(str => Number(str))
      return list
    }
  },
  mounted() {},
  methods: {
    handleChange() {
      this.rdm = RANDOM(0, 999)
    }
  }
}
</script>

<style scoped lang="less">
@import url(./ScrollCountDemo);
</style>