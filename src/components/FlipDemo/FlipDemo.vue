<template>
  <div class="flip-demo">
    <div class="card" ref="card">{{value}}</div>
    <button @click="play">主动触发</button>
  </div>
</template>

<script>
export default {
  name: "FlipDemo",
  components: {},
  props: {},
  data() {
    return {
      value: 123
    }
  },
  mounted() {
    clearInterval(this.timer)
    this.timer = setInterval(() => {
      this.value = new Date().getSeconds()
      this.play()
    }, 2000)
  },
  computed: {},
  watch: {},
  methods: {
    play() {
      this.$refs["card"].className = "card"
      window.requestAnimationFrame(time => {
        window.requestAnimationFrame(time => {
          this.$refs["card"].className = "card flip"
        })
      })
    }
  }
}
</script>

<style scoped lang="less">
@import url(./FlipDemo);
</style>