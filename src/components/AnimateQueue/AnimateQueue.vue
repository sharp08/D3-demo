<template>
  <div class="animate-queue">
    <button @click="play">依次出现</button>
    <div class="line" ref="line" v-for="i in 4">{{i}}</div>
  </div>
</template>

<script>
export default {
  name: "AnimateQueue",
  components: {},
  props: {},
  data() {
    return {}
  },
  mounted() {
    this.$refs["line"].forEach((item, index) => {
      setTimeout(() => {
        item.className = "line animate"
      }, 300 * index)
    })
  },
  computed: {},
  watch: {},
  methods: {
    play() {
      this.$refs["line"].forEach((item, index) => {
        item.className = "line"
        setTimeout(() => {
          item.className = "line animate"
        }, 300 * index)
      })
    }
  }
}
</script>

<style scoped lang="less">
@import url(./AnimateQueue);
</style>