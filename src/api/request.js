import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/a9b5e4b3ff07666ebd30bc6a79f231f4/vantmall'
})

export function request (config) {
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    return Promise.reject(err)
  })
  instance.interceptors.response.use(res => {
    return res
  }, err => {
    return Promise.reject(err)
  })
  return instance(config)
}

const instanceTest = axios.create({
  baseURL: '/'
})

export function requestTest (config) {
  instanceTest.interceptors.request.use(config => {
    return config
  }, err => {
    return Promise.reject(err)
  })
  instanceTest.interceptors.response.use(res => {
    return res
  }, err => {
    return Promise.reject(err)
  })
  return instanceTest(config)
}
