/*
 * @Descripttion:
 * @version: V1.0.0.1
 * @Author: Qleo
 * @Date: 2022-06-01 19:11:00
 * @LastEditors: Qleo
 * @LastEditTime: 2022-06-02 11:06:22
 */

import http from '@src/api/request.js'
export function getProductListAPI() {
  return http.post('https://10.170.130.181:35002/prod-api/v1/exec/pt/list', {})
}
