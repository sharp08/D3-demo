<template>
  <div class="bar2-container">
    <ul>
      <li>x轴为离散型，y轴为连续型</li>
      <li>动态 x轴，柱状图宽度用 barWidth 自适应</li>
      <li>动态 y轴，动态 markline</li>
      <li>>10 明暗切换</li>
      <li>5 < x <=10 水波特效</li>
    </ul>
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
      list: [
        // { name: "休", value: 6 },
        // { name: "生", value: 17 },
      ], //数据源
      svgH: 400,
      svgW: 400,
      margin: { top: 30, left: 30, bottom: 30, right: 30 }, //  图表到 svg 容器的四个方向的距离
      svg: null,
      xScale: null,
      yScale: null,
      xAxis: null,
      yAxis: null
    }
  },
  mounted() {
    // 获取元素，设置宽高和样式
    this.svg = D3.select(".bar2-container")
      .append("svg")
      .attr("height", this.svgH)
      .attr("width", this.svgW)

    // 关于 padding 相关参考 https://observablehq.com/@d3/d3-scaleband

    // 添加比例尺（离散）
    this.xScale = D3.scaleBand() //  创建一个离散的线性比例尺
      .domain(this.list.map(item => item.name)) //  比例尺范围
      .range([this.margin.left, this.svgW - this.margin.right]) //  比例尺到 svg 容器的距离，这里是左右距离，有了距离就知道了比例尺宽度，从而可以与 domain 的值对应起来
      .paddingInner(0.2) //  barWidth = 【柱状图 + padding】，比例为 8:2
      .paddingOuter(0.2) //  【第一个柱状图到坐标轴最左侧】与【最后一个柱状图到坐标轴最右侧】的距离与 barWidth 的比例

    // 添加比例尺（连续）
    this.yScale = D3.scaleLinear()
      .domain([0, 10])
      .range([this.svgH - this.margin.bottom, this.margin.top]) //  svg 左上角为 0 点，向下变大，向右变大，因此如果期望Y轴自下而上从小变大，需要注意这里

    // 坐标轴（基于比例尺）
    this.xAxis = D3.axisBottom(this.xScale) //  刻度向下
      .tickSize(-(this.svgH - this.margin.bottom - this.margin.top)) //  网格线，其实就是刻度线(svg 高度减去上下 margin 再取反)
      .tickFormat((d, i) => {
        return `${d}(${this.list[i].value})`
      })
      .tickPadding([15]) //  文本与刻度的间距

    this.yAxis = D3.axisLeft(this.yScale).tickSize(
      -(this.svgW - this.margin.left - this.margin.right)
    )

    // 画坐标轴（x轴）
    this.svg
      .append("g")
      .attr("class", "xAxis")
      .attr("transform", `translate(0,${this.svgH - this.margin.bottom})`) //  将坐标轴从原点向下平移
      .call(this.xAxis)

    // 画坐标轴（y轴）
    this.svg
      .append("g")
      .attr("class", "yAxis")
      .attr("transform", `translate(${this.margin.left},0)`) //  将坐标轴从原点向右平移
      .call(this.yAxis)

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

    // this.handleDataChange()
  },
  computed: {},
  watch: {},
  methods: {
    // 数据发生变化时触发（即需要重新渲染表格和柱状图）
    handleDataChange() {
      // 随机生成柱状图个数
      const rdm = RANDOM(1, 8)
      let newData = []

      const str = "休生伤杜景死惊开"

      for (let i = 0; i < rdm; i++) {
        const obj = {
          name: str[i],
          value: RANDOM(0, 20)
        }
        newData.push(obj)
      }
      this.list = newData

      this.handleRenderXScale() //  重画 x 轴
      this.handleRenderYScale() //  重画 y 轴
      this.handleRenderMarkLine() // 更新标示线位置
      this.handleRenderRect() // 更新柱状图
    },
    // 重新设置 x轴
    handleRenderXScale() {
      this.xScale.domain(this.list.map(item => item.name)) //  重新设置 x比例尺
      this.svg.select(".xAxis").call(this.xAxis) //  画新的坐标轴
    },
    // 重新设置 y轴
    handleRenderYScale() {
      this.yScale.domain([0, D3.max(this.list, item => item.value)]) //  重新设置 y比例尺
      // 设置 y轴刻度（多少个值就多少个刻度）
      this.yAxis.tickValues(
        Array.from(new Array(D3.max(this.list, item => item.value) + 1).keys()) //  根据返回的最大值 n，生成一个长度为 n 的递增数组
      )
    },
    // 重新设置标示线
    handleRenderMarkLine() {
      this.svg
        .selectAll("line.markLine")
        .attr("x1", 30)
        .attr("x2", this.svgW - this.margin.right)
        .attr("y1", d => this.yScale(d - 0.5))
        .attr("y2", d => this.yScale(d - 0.5))

      this.svg
        .select(".yAxis")
        .call(this.yAxis)
        .call(g => {
          g.selectAll(".tick text").attr("fill", "#ed4014") //  标签颜色
        })
        .call(g =>
          g
            .selectAll(".tick line")
            .attr("stroke-opacity", 0.5)
            .attr("stroke-dasharray", "5,2")
        ) //  画新的坐标轴
    },
    // 更新柱状图，删除旧动画，添加动画，画柱状图
    handleRenderRect() {
      this.svg.selectAll("animate.bar").remove() //  清除所有的 animate

      let rect = this.svg
        .selectAll("rect")
        .data(this.list)
        .join("rect")

      // 大于 5 就添加动画明暗特效
      rect
        .filter((d, i) => d.value > 10)
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
          return this.yScale(d.value)
        })
        .attr("x", (d, i) => this.xScale(d.name))
        .attr("width", this.xScale.bandwidth()) //  使用内部计算的宽度，如果这里手动设置了宽度，paddingInner 和 paddingOuter 的现象将不好理解
        .attr("height", d => {
          return this.svgH - 30 - this.yScale(d.value)
        })
        .attr("fill", d => {
          if (d.value >= 5) {
            return "#ed4014"
          } else {
            return `rgb(${RANDOM(0, 255)},${RANDOM(0, 255)},${RANDOM(0, 255)})`
          }
        })
    }
  }
}
</script>

<style scoped lang="less">
@import url(./Bar2.less);
</style>