<template>
  <div class="modal-demo-container">
    <button @click="handleShow">创建窗口</button>
    <button @click="handleShow2">显示窗口</button>
    <button @click="handleHide">隐藏窗口</button>
    <button @click="handleDestory">销毁窗口</button>
    <button @click="handleDestoryAll">销毁全部</button>
  </div>
</template>

<script>
export default {
  name: "ModalDemo",
  components: {},
  props: {},
  data() {
    return {
      n: 0
    }
  },
  mounted() {
    // todo 这里有个问题，如果在组件内的显示，隐藏，销毁的行为会导致 instanceList 和 visibleInstances 的列表无法及时更新，需要考虑
  },
  computed: {},
  watch: {},
  methods: {
    handleShow() {
      this.n = this.n + 1
      const z = this.n + ""
      this.$BaseWin.show({
        key: z,
        // render: h => []
        render: h => {
          return [
            h(
              "div",
              {
                slot: "top"
              },
              z.repeat(z)
            )
          ]
        }
      })
    },
    handleShow2() {
      this.$BaseWin.show("1")
    },
    handleHide() {
      this.$BaseWin.hide()
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