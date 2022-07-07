/*
 * @Descripttion:
 * @version: V1.0.0.1
 * @Author: Qleo
 * @Date: 2022-07-04 15:19:31
 * @LastEditors: Qleo
 * @LastEditTime: 2022-07-04 15:47:30
 */
import http from '@src/api/request.js';
export function loginAPI(data) {
  return http.post('/login', data);
}
