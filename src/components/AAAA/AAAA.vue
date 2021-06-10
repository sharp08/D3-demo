<template>
  <div class="AAAA">
    <div class="circle">
      <div :style="handleCalBarStyle(item,idx)" class="bar" ref="bar" v-for="(item,idx) in list">
        <div :style="handleCalCircleStyle(item,idx)" class="inner-circle">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AAAA",
  data() {
    return {
      list: ["a", "b", "c", "d", "e"]
    }
  },
  methods: {
    handleCalBarStyle(item, idx) {
      let angle = 360 / this.list.length
      return {
        transform: `rotate(${angle * idx}deg)`
      }
    },
    handleCalCircleStyle(item, idx) {
      let angle = 360 / this.list.length
      return {
        transform: `rotate(-${angle * idx}deg)`
      }
    }
  }
}
</script>

<style scoped lang="less">
@import url(./AAAA.less);
</style>