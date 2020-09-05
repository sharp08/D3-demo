<template>
  <!-- 渐变动画 -->
  <div class="box">
    <svg height="210" width="200">
      <defs>
        <!-- 静态 -->
        <linearGradient id="logo-gradient-static" x1="0" x2="1" y1="0" y2="0">
          <!-- 这里表示 x轴颜色从0-1 ，y轴颜色不变化 -->
          <stop offset="0.4" stop-color="red" />
          <stop offset="0.5" stop-color="black" />
          <stop offset="0.6" stop-color="blue" />
        </linearGradient>
        <!-- 动态 单向 -->
        <linearGradient id="logo-gradient-flow" x1="0" x2="1" y1="0" y2="0">
          <stop offset="-0.2" stop-color="red">
            <animate attributeName="offset" dur="2s" repeatCount="indefinite" values="-0.2; 1" />
          </stop>
          <stop offset="-0.1" stop-color="black">
            <animate attributeName="offset" dur="2s" repeatCount="indefinite" values="-0.1; 1.1" />
          </stop>
          <stop offset="0" stop-color="blue">
            <animate attributeName="offset" dur="2s" repeatCount="indefinite" values="0; 1.2" />
          </stop>
        </linearGradient>
        <!-- 动态 往返效果 -->
        <linearGradient id="logo-gradient-flow-alternate" x1="0" x2="1" y1="0" y2="0">
          <stop offset="-0.2" stop-color="red">
            <animate
              attributeName="offset"
              dur="2s"
              repeatCount="indefinite"
              values="-0.2; 1;-0.2;"
            />
          </stop>
          <stop offset="-0.1" stop-color="black">
            <animate
              attributeName="offset"
              dur="2s"
              repeatCount="indefinite"
              values="-0.1; 1.1;-0.1"
            />
          </stop>
          <stop offset="0" stop-color="blue">
            <animate attributeName="offset" dur="2s" repeatCount="indefinite" values="0; 1.2;0" />
          </stop>
        </linearGradient>
        <!-- 动态 间隔效果 -->
        <linearGradient id="logo-gradient-flow-interval" x1="0" x2="1" y1="0" y2="0">
          <stop offset="-0.2" stop-color="red">
            <animate attributeName="offset" dur="2s" repeatCount="indefinite" values="-0.2; 2.2" />
          </stop>
          <stop offset="-0.1" stop-color="black">
            <animate attributeName="offset" dur="2s" repeatCount="indefinite" values="-0.1; 2.3" />
          </stop>
          <stop offset="0" stop-color="blue">
            <animate attributeName="offset" dur="2s" repeatCount="indefinite" values="0; 2.4" />
          </stop>
        </linearGradient>
      </defs>
      <rect fill="url(#logo-gradient-static)" height="30" width="200" />
      <rect fill="url(#logo-gradient-flow)" height="30" width="200" y="40" />
      <rect fill="url(#logo-gradient-flow-alternate)" height="30" width="200" y="80" />
      <rect fill="url(#logo-gradient-flow-interval)" height="30" width="200" y="120" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "SVGLinearFlow",
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
  float: left;
  // width: 200px;
  background: orange;
  padding: 10px;
}
</style>