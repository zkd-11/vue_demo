import { coordinateData } from './coordinate-data'

export const convertData = function (data: any) {
  const res = []
  for (let i = 0; i < data.length; i++) {
    // 在这里相当于对传入的城市名进行转换，获取经纬度
    // 最后将数据切换为 经纬度 拼接 value

    // 最终具体城市所处位置能在地图的具体位置显示

    const geoCoord = coordinateData[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res
}
