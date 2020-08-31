<template>
  <div class="bar-container">
    <button>手动变化</button>
  </div>
</template>

<script>
export default {
  name: "Bar",
  components: {},
  props: {},
  data() {
    return {
      list: [5, 5, 5, 5, 5], //数据源
      svgH: 400,
      svgW: 400,
      margin: { top: 30, left: 30, bottom: 30, right: 30 }, //  图表到 svg 容器的四个方向的距离
      barPadding: 10, //  柱状图间距
      svg: null,
      xscale: null,
      yscale: null,
      xAxis: null,
      yAxis: null
    }
  },

  mounted() {
    // 获取元素，设置宽高和样式
    this.svg = D3.select(".bar-container")
      .append("svg")
      .attr("height", this.svgH)
      .attr("width", this.svgW)
      .attr("style", "background:#ff9900")

    // 添加比例尺
    this.xscale = D3.scaleLinear() //  创建一个比例尺
      .domain([0, this.list.length]) //  比例尺范围
      .range([this.margin.left, this.svgW - this.margin.right]) //  比例尺到 svg 容器的距离，这里是左右距离，有了距离就知道了比例尺宽度，从而可以与 domain 的值对应起来

    this.yscale = D3.scaleLinear()
      .domain([0, 10])
      .range([this.svgH - this.margin.bottom, this.margin.top]) //  svg 左上角为 0 点，向下变大，向右变大，因此如果期望Y轴自下而上从小变大，需要注意这里

    // 坐标轴（基于比例尺）
    this.xAxis = D3.axisBottom(this.xscale) //  刻度向下
      .ticks(this.list.length) //
    this.yAxis = D3.axisRight(this.yscale)

    this.svg
      .append("g")
      .attr("class", "xAxis")
      .call(this.xAxis)
      .attr("transform", `translate(0,${this.svgH - this.margin.bottom})`)
    this.svg
      .append("g")
      .attr("class", "yAxis")
      .call(this.yAxis)
      .attr("transform", `translate(${this.margin.left},0)`)

    this.svg
      .append("g")
      .attr("class", "rect")
      .selectAll("rect")
      .data(this.list)
      .enter()
      .append("rect")
      .attr("height", d => this.svgH - this.margin.bottom - this.yscale(d))
      .attr("width", this.barWidth - this.barPadding)
      .attr("x", (d, i) => this.xscale(i + 0.5))
      .attr("y", d => this.yscale(d))
      .attr("fill", "#1890ff")

    D3.select("button").on("click", () => {
      let newData = [
        RANDOM(0, 10),
        RANDOM(0, 10),
        RANDOM(0, 10),
        RANDOM(0, 10),
        RANDOM(0, 10)
      ]
      const rdmColor = `rgb(${RANDOM(0, 255)},${RANDOM(0, 255)},${RANDOM(
        0,
        255
      )})`
      D3.selectAll("rect")
        .data(newData)
        .transition()
        .attr("y", d => {
          return this.yscale(d)
        })
        .attr("height", d => {
          return this.svgH - 30 - this.yscale(d)
        })
        .attr("fill", rdmColor)
    })
  },
  computed: {
    barWidth() {
      return (
        (this.svgW - this.margin.right - this.margin.left) / this.list.length
      )
    }
  },
  watch: {},
  methods: {}
}
</script>

<style scoped lang="less">
@import url(./Bar.less);
</style>