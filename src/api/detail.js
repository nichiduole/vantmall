import { request, requestTest } from '@/api/request.js'

export const homeData = () => request('/home')
export const popupData = () => request('/popup')
export const searchData = (params) => request({
  url: '/search',
  params: params
})
export const filterData = (params) => request({
  url: '/filter',
  params: params
})
export const productDetail = () => request('/product')
export const cartData = () => request('/cart')
export const logicData = (params) => request({
  url: '/logic',
  params: params
})
export const testData = (params) => requestTest({
  method: 'post',
  url: '/api',
  params: params
})
export const topicData = () => request('/topic')
export const categoryData = () => request('/category')
