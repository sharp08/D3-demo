<template>
  <div class="bar-container" title="Bar">
    <div>两个轴都为连续型</div>
    <button @click="handleDataChange">手动变化</button>
  </div>
</template>

<script>
export default {
  name: "Bar",
  components: {},
  props: {},
  data() {
    return {
      markLineList: [3, 6, 9], //  标示线
      list: [2, 4, 6, 8, 10], //数据源
      svgH: 400,
      svgW: 400,
      margin: { top: 30, left: 30, bottom: 30, right: 30 }, //  图表到 svg 容器的四个方向的距离
      barPadding: 10, //  柱状图间距
      svg: null,
      xScale: null,
      yScale: null,
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

    // 添加比例尺
    this.xScale = D3.scaleLinear() //  创建一个连续的线性比例尺
      .domain([0, this.list.length + 1]) //  比例尺范围
      .range([this.margin.left, this.svgW - this.margin.right]) //  比例尺到 svg 容器的距离，这里是左右距离，有了距离就知道了比例尺宽度，从而可以与 domain 的值对应起来

    this.yScale = D3.scaleLinear()
      .domain([0, 10])
      .range([this.svgH - this.margin.bottom, this.margin.top]) //  svg 左上角为 0 点，向下变大，向右变大，因此如果期望Y轴自下而上从小变大，需要注意这里

    // 坐标轴（基于比例尺）
    this.xAxis = D3.axisBottom(this.xScale) //  刻度向下
      .tickSize(-(this.svgH - this.margin.bottom - this.margin.top)) //  网格线，其实就是刻度线(svg 高度减去上下 margin 再取反)
      .ticks(this.list.length) //
      .tickFormat(d => {
        if (d % 2 === 0) {
          return `${d}偶数`
        } else {
          return ""
        }
      })
      .tickPadding([15]) //  文本与刻度的间距

    this.yAxis = D3.axisLeft(this.yScale).tickSize(-50)

    // 画坐标轴
    this.svg
      .append("g")
      .attr("class", "xAxis")
      .attr("transform", `translate(0,${this.svgH - this.margin.bottom})`) //  将坐标轴从原点向下平移
      .call(this.xAxis)

    // 画坐标轴
    this.svg
      .append("g")
      .attr("class", "yAxis")
      .attr("transform", `translate(${this.margin.left},0)`) //  将坐标轴从原点向右平移
      .call(this.yAxis)
      .call(g => {
        g.selectAll(".yAxis .domain").remove()
        g.selectAll(".tick text").attr("fill", "#ed4014") //  标签颜色
      })
      .call(g =>
        g
          .selectAll(".tick line")
          .attr("stroke-opacity", 0.5)
          .attr("stroke-dasharray", "2,2")
      )

    // 画柱状图（初始化，也可以不加载，直接通过数据变化再进行加载）
    let rect = this.svg
      .append("g")
      .attr("class", "rect")
      .selectAll("rect")
      .data(this.list)
      .enter()
      .append("rect")

    rect
      .attr("height", d => this.svgH - this.margin.bottom - this.yScale(d)) // this.yScale(d) 返回的是 d 对应的 range
      .attr("width", this.barWidth - this.barPadding)
      .attr("x", (d, i) => this.xScale(i + 0.5))
      .attr("y", d => this.yScale(d)) //  标识柱状图 Y 轴起点，假如图表在第四象限，对于一个竖向的柱状图，上面为起点
      .attr("fill", "#1890ff")

    // 画标示线
    this.svg
      .selectAll("line.markLine")
      .data(this.markLineList)
      .enter()
      .append("line")
      .attr("class", "markLine")
      .attr("x1", 30)
      .attr("x2", this.svgW - this.margin.right)
      .attr("y1", d => this.yScale(d - 0.5))
      .attr("y2", d => this.yScale(d - 0.5))
      .attr("fill", "none")
      .attr("stroke", d => {
        if (d === 3) {
          return "#19be6b"
        } else if (d === 6) {
          return "#008cee"
        } else if (d === 9) {
          return "#ed4014"
        }
      })
      .attr("stroke-width", 5)
      .attr("stroke-dasharray", d => {
        if (d === 3) {
          return "4,2"
        } else if (d === 6) {
          return "16,2"
        } else if (d === 9) {
          return ""
        }
      })

    this.handleDataChange()

    // 手动触发数据变化
    // D3.select("button").on("click", this.handleDataChange)

    // setInterval(() => {
    //   this.handleDataChange()
    // }, 500)
  },
  computed: {
    barWidth() {
      return (
        (this.svgW - this.margin.right - this.margin.left) /
        (this.list.length + 1)
      )
    }
  },
  watch: {},
  methods: {
    handleDataChange() {
      // 随机生成柱状图个数
      const rdm = RANDOM(1, 6)
      let newData = []
      for (let i = 0; i < rdm; i++) {
        newData.push(RANDOM(0, 10))
      }

      // 随机色
      const rdmColor = `rgb(${RANDOM(0, 255)},${RANDOM(0, 255)},${RANDOM(
        0,
        255
      )})`

      this.svg.selectAll("animate.bar").remove() //  清除所有的 animate

      let rect = this.svg
        .selectAll("rect")
        .data(newData)
        .join("rect")

      // 大于 5 就添加动画明暗特效
      rect
        .filter((d, i) => d > 5)
        .append("animate")
        .attr("class", "bar")
        .attr("attributeName", "fill")
        .attr("values", "red;black;red;")
        .attr("begin", "0s")
        .attr("dur", "2s")
        .attr("repeatCount", "indefinite")

      // 画柱状图
      rect
        .transition()
        .attr("y", d => {
          return this.yScale(d)
        })
        .attr("x", (d, i) => this.xScale(i + 0.5))
        .attr("width", this.barWidth - this.barPadding)
        .attr("height", d => {
          return this.svgH - 30 - this.yScale(d)
        })
        .attr("fill", d => {
          if (d >= 5) {
            return "#ed4014"
          } else {
            return rdmColor
          }
        })
    }
  }
}
</script>

<style scoped lang="less">
@import url(./Bar.less);
</style>