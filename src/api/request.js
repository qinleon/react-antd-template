import axios from 'axios';
import { message } from 'antd';
import { isAuthenticated } from '@src/utils/Session';

// create an axios instance
const request = axios.create({
  baseURL: '', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 60000, // request timeout
});

// request interceptor
request.interceptors.request.use(
  config => {
    config.headers['Authorization'] = isAuthenticated();
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
request.interceptors.response.use(
  response => {
    const res = response.data;
    const codeFlag = ['0000', 200];
    if (codeFlag.includes(res.code)) {
      return res;
    } else {
      if (res.code === '0104' || res.code === '0105' || res.code === '0106') {
        // 重新登录
        message.error(res.message || 'Error', () => {});
      } else {
        message.error(res.message || 'Error');
      }
      return Promise.reject(res);
    }
  },
  error => {
    console.log('err' + error); // for debug
    message.error(error.message || 'Error');
    return Promise.reject(error);
  }
);

export default request;
