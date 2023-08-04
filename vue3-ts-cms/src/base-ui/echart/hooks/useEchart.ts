import * as echarts from 'echarts'

// 需要使用decalre 声明该json文件
import chinaMapData from '../data/china.json'

// 为图表全局注册地图
echarts.registerMap('china', chinaMapData)

export default function (el: HTMLElement) {
  console.log('11')

  const echartInstance = echarts.init(el)

  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }

  // 返回更新图表
  const updateSize = () => {
    echartInstance.resize()
  }

  // 对浏览器进行监听， 变化是自动调整图表
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })

  return {
    echartInstance,
    setOptions,
    updateSize
  }
}
