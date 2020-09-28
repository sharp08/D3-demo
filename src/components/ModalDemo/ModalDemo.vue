<template>
  <div class="modal-demo-container">
    <button @click="handleShow">创建窗口</button>
    <button @click="handleDestory">销毁窗口</button>
    <button @click="handleDestoryAll">销毁全部</button>
  </div>
</template>

<script>
import StatusTransition from "@/components/StatusTransition"

export default {
  name: "ModalDemo",
  components: {},
  props: {},
  data() {
    return {}
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {
    handleShow() {
      this.$BaseWin.show({
        // top: StatusTransition
        render: h => {
          return [
            // h(StatusTransition, {
            //   slot: "main",
            //   style: { position: "fixed", zIndex: 1000 }
            // })
          ]
        }
      })
    },
    handleDestory() {
      this.$BaseWin.destory()
    },
    handleDestoryAll() {
      this.$BaseWin.destoryAll()
    }
  }
}
</script>

<style scoped lang="less">
@import url(./ModalDemo);
</style>