/*
 * @Descripttion:
 * @version: V1.0.0.1
 * @Author: Qleo
 * @Date: 2022-06-01 19:11:00
 * @LastEditors: Qleo
 * @LastEditTime: 2022-07-07 18:12:59
 */

import http from '@src/api/request.js';
export function getProductListAPI() {
  return http.post('/v1/exec/pt/list', {});
}
export function getProductGroupListAPI(param) {
  return http.post('/v1/exec/g-o-p/page', param);
}
