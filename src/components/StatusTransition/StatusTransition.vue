<template>
  <div class="status-transition-container" title="StatusTransition">
    <button @click="handle">数字过渡</button>
    <GsapSpan :value="value" />
  </div>
</template>

<script>
import { gsap } from "gsap"

import GsapSpan from "./components/GsapSpan"

export default {
  name: "StatusTransition",
  components: {
    GsapSpan
  },
  props: {},
  data() {
    return {
      value: 0
    }
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {
    handle() {
      this.value = RANDOM(0, 100, 2)
    }
  }
}
</script>

<style scoped lang="less">
@import url(./StatusTransition);
</style>