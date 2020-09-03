<template>
  <!-- 高亮 -->
  <div class="shine"></div>
</template>

<script>
export default {
  name: "Shine",
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
.shine {
  width: 100px;
  height: 200px;
  background: #dadada;
  border: 5px solid red;
  animation: shine 1s alternate infinite;
  left: 850px;
  position: absolute;
}

@keyframes shine {
  0% {
    border-color: rgba(0, 0, 0, 0);
  }
  100% {
    border-color: rgba(0, 0, 0, 1);
  }
}
</style>
