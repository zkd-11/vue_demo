import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

// 默认 dayJs 插件不对utc时间进行处理
dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatUtcString(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  // 表示对utc时间使用 格式转化- 转化为 format格式
  return dayjs.utc(utcString).utcOffset(8).format(format)
}

// export function formatTimestamp(
//   timestamp: number,
//   format: string = DATE_TIME_FORMAT
// ) {
//   return ''
// }
