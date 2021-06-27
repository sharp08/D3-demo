<template>
  <div class="notice-demo">
    <button @click="handleShowMsg">显示提示</button>
  </div>
</template>

<script>
export default {
  name: "NoticeDemo",
  data() {
    return {}
  },
  methods: {
    handleShowMsg() {
      this.$notice.info({
        duration: 30,
        content: "消息",
      })
    },
  },
}
</script>

<style scoped lang="less">
@import url(./NoticeDemo.less);
</style>