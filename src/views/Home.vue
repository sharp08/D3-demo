<template>
  <div class="home">
    <!-- <Bar />
    <Bar2 />
    <LightMove />
    <Shine />
    <SVGLinearFlow />
    <SVGViewBox />
    <SVGHeartBeat />
    <OutHidden />
    <StatusTransition />
    <Drag />
    <AnimateCSS />
    <ModalDemo /> -->
    <ResizableElementDemo />
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
import OutHidden from "@/components/OutHidden"
import StatusTransition from "@/components/StatusTransition"
import Drag from "@/components/Drag"
import AnimateCSS from "@/components/AnimateCSS"
import ModalDemo from "@/components/ModalDemo"
import ResizableElementDemo from "@/components/ResizableElementDemo"

export default {
  name: "Home",
  components: {
    Bar,
    Bar2,
    LightMove,
    Shine,
    SVGLinearFlow,
    SVGViewBox,
    SVGHeartBeat,
    OutHidden,
    StatusTransition,
    Drag,
    AnimateCSS,
    ModalDemo,
    ResizableElementDemo
  },
  data() {
    return {}
  },
  mounted() {},
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