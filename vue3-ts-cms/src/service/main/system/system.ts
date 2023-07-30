import hyRequest from '../../index'

import { IDataType } from '../../types'

// 前者为请求地址， 后者为限制信息
export function getPageListData(url: string, queryInfo: any) {
  return hyRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
