/*
 * @Descripttion:
 * @version: V1.0.0.1
 * @Author: Qleo
 * @Date: 2022-06-01 19:11:00
 * @LastEditors: Qleo
 * @LastEditTime: 2022-06-16 10:33:42
 */

import http from '@src/api/request.js';
export function getProductListAPI() {
  return http.post('/api/v1/exec/pt/list', {});
}
export function getProductGroupListAPI(param) {
  return http.post('/api/v1/exec/g-o-p/page', param);
}
