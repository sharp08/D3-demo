<template>
  <div class="pyramid">
    <!-- 单一的三角面，由三个小三角面组成 -->
    <div class="triangle front">
      <div class="unit t1">前</div>
      <div class="unit t2"></div>
      <div class="unit t3"></div>
    </div>
    <div class="triangle back">
      <div class="unit t1">后</div>
      <div class="unit t2"></div>
      <div class="unit t3"></div>
    </div>
    <div class="triangle left">
      <div class="unit t1">左</div>
      <div class="unit t2"></div>
      <div class="unit t3"></div>
    </div>
    <div class="triangle right">
      <div class="unit t1">右</div>
      <div class="unit t2"></div>
      <div class="unit t3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Triangle",
  components: {},
  props: {},
  data() {
    return {}
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style scoped lang="less">
@import url(./Triangle.less);
</style>
