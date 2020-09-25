<template>
  <!-- 光影一闪而过 -->
  <div class="box" title="LightMove">
    <div class="blink-container">DOM</div>
    <!-- SVG -->
    <svg height="200" width="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="svg_6" x1="0" x2="1" y1="0" y2="1">
          <stop offset="-1" stop-color="#ffffff">
            <animate attributeName="offset" dur="2s" repeatCount="indefinite" values="-1; 1" />
          </stop>
          <stop offset="-0.55" stop-color="#eeeeee">
            <animate attributeName="offset" dur="2s" repeatCount="indefinite" values="-0.55; 1.45" />
          </stop>
          <stop offset="-0.5" stop-color="#ffffff">
            <animate attributeName="offset" dur="2s" repeatCount="indefinite" values="-0.5; 1.5" />
          </stop>
          <stop offset="-0.45" stop-color="#eeeeee">
            <animate attributeName="offset" dur="2s" repeatCount="indefinite" values="-0.45; 1.55" />
          </stop>
          <stop offset="0" stop-color="#ffffff">
            <animate attributeName="offset" dur="2s" repeatCount="indefinite" values="0; 2" />
          </stop>
        </linearGradient>
      </defs>
      <g>
        <title>Layer 1</title>
        <rect
          fill="url(#svg_6)"
          height="200"
          id="svg_5"
          stroke="#d3d0c9"
          stroke-linecap="null"
          stroke-linejoin="null"
          stroke-opacity="0.8"
          stroke-width="5"
          width="200"
        />
      </g>
      <text fill="#ff9900" font-size="80" stroke="blue" stroke-width="4" x="100" y="100">SVG</text>
    </svg>
  </div>
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
.box {
  border: @container-border;
  padding: 4px;
  float: left;

  .blink-container {
    position: relative;
    float: left;
    overflow: hidden;
    height: 200px;
    width: 200px;
    border: @container-border;
    background: orange;
    text-align: center;
    line-height: 200px;
    font-size: 80px;
    color: #008cee;
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
  svg {
    margin-left: 10px;
    text {
      text-anchor: middle; //  水平居中
      dominant-baseline: middle; //  垂直居中
    }
  }
}
</style>