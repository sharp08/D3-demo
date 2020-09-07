<template>
  <div class="home">
    <Bar />
    <Bar2 />
    <LightMove />
    <Shine />
    <SVGLinearFlow />
    <SVGViewBox />
    <SVGHeartBeat />
  </div>
</template>

<script>
import Bar from "@/components/Bar"
import Bar2 from "@/components/Bar2"
import LightMove from "@/components/LightMove"
import Shine from "@/components/Shine"
import SVGLinearFlow from "@/components/SVGLinearFlow"
import SVGViewBox from "@/components/SVGViewBox"
import SVGHeartBeat from "@/components/SVGHeartBeat"

export default {
  name: "Home",
  components: {
    Bar,
    Bar2,
    LightMove,
    Shine,
    SVGLinearFlow,
    SVGViewBox,
    SVGHeartBeat
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="less">
.home {
  float: left;
  & > * {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>