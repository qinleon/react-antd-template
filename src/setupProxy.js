/*
 * @Descripttion:
 * @version: V1.0.0.1
 * @Author: Qleo
 * @Date: 2022-06-01 16:55:10
 * @LastEditors: Qleo
 * @LastEditTime: 2022-06-02 10:18:30
 */
//引入http-proxy-middleware，react脚手架已经安装
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()
console.log(1)
app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://10.170.130.181:35002',
    changeOrigin: true,
    pathRewrite: { '^/api': '/prod-api' },
    logLevel: 'debug',
  })
)

app.listen(3000)
