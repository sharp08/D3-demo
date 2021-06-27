<template>
  <div class="notice">
    <div :key="item.id" class="notice-container" v-for="item in notices">
      <div class="notice-content">{{item.content}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "notice",
  data() {
    return {
      notices: [],
    }
  },
  created() {
    // id自增控制
    this.id = 0
  },
  methods: {
    add(options) {
      const id = "id_" + this.id++
      const _notice = { ...options, id }
      this.notices.push(_notice)
      // 自动关闭
      const duration = options.duration || 1 //单位秒
      setTimeout(() => {
        this.del(id)
      }, duration * 1000)
    },
    del(id) {
      for (let i = 0; i < this.notices.length; i++) {
        const element = this.notices[i]
        if (element.id === id) {
          this.notices.splice(i, 1)
          break
        }
      }
    },
  },
}
</script>
 
<style lang="less" scoped>
.notice {
  position: fixed;
  width: 100%;
  top: 30px;
  left: 0;
  text-align: center;
  .notice-content {
    display: inline-block;
    padding: 8px;
    background: #fff;
    margin-bottom: 10px;
  }
}
</style>