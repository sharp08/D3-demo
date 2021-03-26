<template>
  <div class="cube" ref="cube">
    <div class="rect front">前</div>
    <div class="rect back">后</div>
    <div class="rect left">左</div>
    <div class="rect right">右</div>
    <div class="rect top">上</div>
    <div class="rect bottom">下</div>
  </div>
</template>

<script>
export default {
  name: "Cube",
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
@import url(./Cube.less);
</style>
