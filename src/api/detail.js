import { request } from '@/api/request.js'

export const homeData = () => request('/home')
export const popupData = () => request('/popup')
export const searchData = (params) => request('/search', {
  params: params
})
export const filterData = (params) => request('/filter', {
  params: params
})
export const productDetail = () => request('/product')
