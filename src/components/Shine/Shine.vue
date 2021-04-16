<template>
  <!-- 高亮 -->
  <div class="box" title="shine">
    <div class="shine"></div>
  </div>
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
.box {
  .generalContainer;
  .globalCenter;
  padding: 10px;

  .shine {
    width: 100px;
    height: 200px;
    background: #dadada;
    border: 5px solid red;
    animation: shine 1s alternate infinite;
    float: left;
  }

  @keyframes shine {
    0% {
      border-color: rgba(0, 0, 0, 0);
    }
    100% {
      border-color: rgba(0, 0, 0, 1);
    }
  }
}
</style>
