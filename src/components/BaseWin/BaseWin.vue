<template>
  <div class="base-win">
    <!-- 背景区 -->
    <slot name="mask">
      <div @click="handleClickMask" class="mask"></div>
    </slot>
    <!-- 主内容区 -->
    <div class="main">
      <slot name="top">
        <div class="top">top</div>
      </slot>
      <slot name="mid">
        <div class="mid">mid</div>
      </slot>
      <slot name="btm">
        <div class="btm">btm</div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseWin",
  components: {},
  props: {},
  data() {
    return {
      title: null
    }
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {
    handleClickMask() {
      console.log("背景")
    }
  }
}
</script>

<style scoped lang="less">
@import url(./BaseWin.less);
</style>