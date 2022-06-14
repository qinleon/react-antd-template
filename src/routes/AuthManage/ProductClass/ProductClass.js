/*
 * @Descripttion:
 * @version: V1.0.0.1
 * @Author: Qleo
 * @Date: 2022-06-01 16:03:10
 * @LastEditors: Qleo
 * @LastEditTime: 2022-06-02 11:24:25
 */
import React from 'react'
import './index.css'
import { Button } from 'antd'
import { getProductListAPI } from '@src/api/auth/productClassAPI.js'
export default class ProductClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productList: [],
    }
  }
  componentDidMount() {
    getProductListAPI().then(({ data }) => {
      this.setState({
        productList: data,
      })
    })
  }

  render() {
    return (
      <div>
        <div className="left-group">
          <Button>添加</Button>&emsp;
          <div className="product-group" />
        </div>
        <div className="right-product">
          {this.state.productList.map(item => {
            return (
              <div className="product" key={item.productCode}>
                {item.productName}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
