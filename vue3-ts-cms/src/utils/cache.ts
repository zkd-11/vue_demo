class LocalCache {
  setCache(key: string, value: any) {
    // 因为value不限制， 但是localStorage要求为json字符串类型
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    // 清空缓存 慎用
    window.localStorage.clear()
  }
}
// 导出一个实例化对象
export default new LocalCache()
