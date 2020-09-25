<template>
  <!-- 结合 Animate.css 实现过渡效果 -->
  <div class="animate-css-container">
    <!-- 路由方式 -->
    <button @click="handle" class="btn1">切换路由</button>
    <transition
      enter-active-class="animate__animated animate__rollIn"
      leave-active-class="animate__animated animate__rollOut"
      mode="out-in"
      name="custom-classes-transition"
    >
      <router-view></router-view>
    </transition>
    <!-- 组件方式 -->
    <button @click="handle2" class="btn2">切换组件</button>
    <transition
      enter-active-class="animate__animated animate__lightSpeedInLeft"
      leave-active-class="animate__animated animate__lightSpeedOutRight"
      mode="out-in"
      name="custom-classes-transition"
    >
      <component :is="renderComp" style="position:absolute;bottom:0;" />
    </transition>
  </div>
</template>

<script>
import ComA from "./components/ComA"
import ComB from "./components/ComB"

export default {
  name: "AnimateCSS",
  components: {},
  props: {},
  data() {
    return {
      bool: false
    }
  },
  mounted() {},
  computed: {
    renderComp() {
      if (this.bool) {
        return ComA
      } else {
        return ComB
      }
    }
  },
  watch: {},
  methods: {
    handle() {
      if (this.$route.name === "ComA") {
        this.$router.push({ name: "ComB" })
      } else if (this.$route.name === "ComB") {
        this.$router.push({ name: "ComA" })
      }
    },
    handle2() {
      this.bool = !this.bool
    }
  }
}
</script>

<style scoped lang="less">
@import url(./AnimateCSS);
</style>