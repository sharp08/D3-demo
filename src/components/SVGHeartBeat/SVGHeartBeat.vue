<template>
  <div class="box" title="SVGHeartBeat">
    <!-- 心跳动画 -->
    <svg
      height="200"
      preserveAspectRatio="xMinYMin meet"
      style="border:1px solid #cd0000;"
      width="400"
    >
      <rect fill="#cd0000" height="80" width="80" x="40" y="40">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          dur="1s"
          repeatCount="indefinite"
          type="translate"
          values="80 80;"
        />
        <animateTransform
          additive="sum"
          attributeName="transform"
          attributeType="XML"
          dur="1s"
          repeatCount="indefinite"
          type="scale"
          values="1;1.5"
        />
        <animateTransform
          additive="sum"
          attributeName="transform"
          attributeType="XML"
          dur="1s"
          repeatCount="indefinite"
          type="translate"
          values="-80 -80"
        />
        <animate attributeName="fill" dur="1s" repeatCount="indefinite" values="red;transparent" />
      </rect>
      <rect fill="#008cee" height="80" width="80" x="40" y="40" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "SVGHeartBeat",
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
  border: 4px solid #ed4014;
  padding: 10px;
}
</style>