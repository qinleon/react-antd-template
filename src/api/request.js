import axios from 'axios'
import { message } from 'antd'

// create an axios instance
const service = axios.create({
  baseURL: '', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 60000, // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    config.headers['Authorization'] =
      'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJndW9xaW5saWFuZyIsInVzZXJJZCI6IjhhMTM3NzhiNDljZjQ1ZTc5NjQ3NWMxNGJjZmI1NjIyIiwiZXhwIjoxNjU1NDU1NTc0fQ.lQ5e4mOAzCS5ZXDWv1OxjLNEAoIRruQ87RVzJraHftpV74QMPoz_TEN02VTqYjDKZ1Sh-UqHVmJfN-tMj1J6ZQ2vDPIdgxeKrGR87avmBtpjxeUNsHibv1vXpPiBQ-09lv-HQm46ox2QUcgk9prUX8Zq6_EyAzgxYA463CUGj9s'
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    const codeFlag = ['0000', 200]
    if (codeFlag.includes(res.code)) {
      return res
    } else {
      if (res.code === '0104' || res.code === '0105' || res.code === '0106') {
        // 重新登录
        message.error(res.message || 'Error', () => {})
      } else {
        message.error(res.message || 'Error')
      }
      return Promise.reject(res)
    }
  },
  error => {
    console.log('err' + error) // for debug
    message.error(error.message || 'Error')
    return Promise.reject(error)
  }
)

export default service
