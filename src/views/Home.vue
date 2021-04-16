<template>
  <div class="home">
    <!-- <Bar /> -->
    <!-- <Bar2 /> -->
    <!-- <SVGViewBox /> -->
    <!-- <ModalDemo /> -->
    <!-- 以下为标准尺寸 demo -->
    <LightMove />
    <Shine />
    <SVGLinearFlow />
    <SVGHeartBeat />
    <OutHidden />
    <StatusTransition />
    <Drag />
    <AnimateCSS />
    <ResizableElementDemo />
    <CubeDemo />
    <PyramidDemo />
    <ScrollCountDemo />
    <LinearGradientDemo />
    <ScrollList />
    <FlipDemo />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    Bar: () => import(/* webpackChunkName: "Bar" */ "@/components/Bar"),
    Bar2: () => import(/* webpackChunkName: "Bar2" */ "@/components/Bar2"),
    LightMove: () =>
      import(/* webpackChunkName: "LightMove" */ "@/components/LightMove"),
    Shine: () => import(/* webpackChunkName: "Shine" */ "@/components/Shine"),
    SVGLinearFlow: () =>
      import(
        /* webpackChunkName: "SVGLinearFlow" */ "@/components/SVGLinearFlow"
      ),
    SVGViewBox: () =>
      import(/* webpackChunkName: "SVGViewBox" */ "@/components/SVGViewBox"),
    SVGHeartBeat: () =>
      import(
        /* webpackChunkName: "SVGHeartBeat" */ "@/components/SVGHeartBeat"
      ),
    OutHidden: () =>
      import(/* webpackChunkName: "OutHidden" */ "@/components/OutHidden"),
    StatusTransition: () =>
      import(
        /* webpackChunkName: "StatusTransition" */ "@/components/StatusTransition"
      ),
    Drag: () => import(/* webpackChunkName: "Drag" */ "@/components/Drag"),
    AnimateCSS: () =>
      import(/* webpackChunkName: "AnimateCSS" */ "@/components/AnimateCSS"),
    ModalDemo: () =>
      import(/* webpackChunkName: "ModalDemo" */ "@/components/ModalDemo"),
    ResizableElementDemo: () =>
      import(
        /* webpackChunkName: "ResizableElementDemo" */ "@/components/ResizableElementDemo"
      ),
    CubeDemo: () =>
      import(/* webpackChunkName: "CubeDemo" */ "@/components/CubeDemo"),
    PyramidDemo: () =>
      import(/* webpackChunkName: "PyramidDemo" */ "@/components/PyramidDemo"),
    ScrollCountDemo: () =>
      import(
        /* webpackChunkName: "ScrollCountDemo" */ "@/components/ScrollCountDemo"
      ),
    LinearGradientDemo: () =>
      import(
        /* webpackChunkName: "LinearGradientDemo" */ "@/components/LinearGradientDemo"
      ),
    ScrollList: () =>
      import(/* webpackChunkName: "ScrollList" */ "@/components/ScrollList"),
    FlipDemo: () =>
      import(/* webpackChunkName: "FlipDemo" */ "@/components/FlipDemo")
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