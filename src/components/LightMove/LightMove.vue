<template>
  <!-- 光影一闪而过 -->
  <div class="blink-container"></div>
</template>

<script>
export default {
  name: "LightMove",
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

<style lang="less" scoped>
.blink-container {
  position: absolute;
  left: 600px;
  overflow: hidden;
  height: 400px;
  width: 400px;
  background: orange;
  &:after {
    position: absolute;
    top: 0;
    width: 30%;
    height: 100%;
    content: "";
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-45deg);
    animation: 4s linear 0s infinite abc; //  动画执行时间为4s；线性演示轨迹；0s 后开始执行动画；无限循环；
  }
  // 4s 的动画，前 75% 都没有变化，展示的效果是 1s 执行完成的
  @keyframes abc {
    0%,
    75% {
      left: -100%;
    }
    100% {
      left: 150%;
    }
  }
}
</style>