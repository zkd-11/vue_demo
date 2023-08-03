<template>
  <div class="dashboard">
    <div ref="divRef" :style="{ width: '600px', height: '500px' }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

import * as echarts from 'echarts'
import { useStore } from '@/store'
export default defineComponent({
  name: 'dashboard',
  setup() {
    const divRef = ref<HTMLElement>()
    // 需要使用onmounted, 组件挂完在对其进行echarts配置
    onMounted(() => {
      // 1. 初始化echarts实例
      const echartInstance = echarts.init(divRef.value!, 'light', {
        renderer: 'svg'
      })
      // 2. 编写配置文件
      const option = {
        title: {
          text: 'ECharts 入门示例',
          subtext: '哈哈哈啊'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [18, 20, 36, 10, 10, 20]
          }
        ]
      }
      // 3.设置配置,并且开始绘制
      echartInstance.setOption(option)

      const store = useStore()
      store.dispatch('dashboard/getDashboardDataAction')
    })

    return {
      divRef
    }
  }
})
</script>

<style scoped></style>
