import hyquest from '@/service/index'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getCategoryGoodsCount() {
  return hyquest.get({
    url: DashboardAPI.categoryGoodsCount
  })
}
export function getCategoryGoodsSale() {
  return hyquest.get({
    url: DashboardAPI.categoryGoodsSale
  })
}
export function getCategoryGoodsFavor() {
  return hyquest.get({
    url: DashboardAPI.categoryGoodsFavor
  })
}
export function getAddressGoodsSale() {
  return hyquest.get({
    url: DashboardAPI.addressGoodsSale
  })
}
