/*
 * @Descripttion:
 * @version: V1.0.0.1
 * @Author: Qleo
 * @Date: 2022-06-01 16:03:10
 * @LastEditors: Qleo
 * @LastEditTime: 2022-06-16 10:33:32
 */
import React from 'react';
import './ProductManage.scss';
import { Button } from 'antd';
import { getProductListAPI, getProductGroupListAPI } from '@src/api/auth/productClassAPI.js';

import { Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;

export default class ProductClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupList: [],
      productList: [
        {
          id: 21,
          updateTime: '2022-05-27 16:40:25',
          createTime: '2022-03-19 13:13:06',
          deleteFlag: 'NO',
          enterpriseCode: 'd5aa7cd2316987a6',
          companyName: '微博',
          productCode: 'd2f2ba3fd3199387',
          productName: '新浪微博',
          productNameEn: 'xinlangweibo',
          offline: 'NO',
          blockFlag: 0,
          greyFlag: 0,
          matchUrl: 'weibo.com',
          sortNo: 1,
        },
        {
          id: 93,
          updateTime: '2022-05-27 17:18:57',
          createTime: '2022-05-19 17:51:58',
          deleteFlag: 'NO',
          enterpriseCode: '5bca57432136ee47',
          companyName: '苹果公司',
          productCode: 'b82b4d09ad79f8f6',
          productName: 'dw',
          productNameEn: 'dd',
          offline: 'NO',
          blockFlag: 0,
          greyFlag: 0,
          matchUrl: null,
          sortNo: 1,
        },
        {
          id: 113,
          updateTime: '2022-06-07 10:15:32',
          createTime: '2022-06-07 10:15:32',
          deleteFlag: 'NO',
          enterpriseCode: 'd5aa7cd2316987a6',
          companyName: '微博',
          productCode: 'd5e7e76f30d0bbd3',
          productName: 'AAAA1',
          productNameEn: 'aaaa',
          offline: 'NO',
          blockFlag: 0,
          greyFlag: 0,
          matchUrl: null,
          sortNo: 100004,
        },
        {
          id: 114,
          updateTime: '2022-06-07 12:00:02',
          createTime: '2022-06-07 12:00:02',
          deleteFlag: 'NO',
          enterpriseCode: 'cdc9dc265dd61586',
          companyName: '新浪',
          productCode: '38be597a802bda4a',
          productName: '新闻',
          productNameEn: 'piny',
          offline: 'NO',
          blockFlag: 0,
          greyFlag: 0,
          matchUrl: null,
          sortNo: 100004,
        },
      ],
      checkedList: [],
      indeterminate: false,
      checkAll: false,
    };
  }
  componentDidMount() {
    this.getProductList();
    this.getProductGroupList();
  }
  getProductList = () => {
    getProductListAPI().then(({ data }) => {
      this.setState({
        productList: data,
      });
    });
  };
  getProductGroupList = () => {
    getProductGroupListAPI({ number: 0, size: 99999 }).then(({ data }) => {
      this.setState({
        groupList: data.content,
      });
    });
  };
  // 单选
  onChange = checkedList => {
    this.setState(state => ({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < state.productList.length,
      checkAll: checkedList.length === state.productList.length,
    }));
  };
  // 全选
  onCheckAllChange = e => {
    this.setState(state => ({
      checkedList: e.target.checked ? state.productList.map(item => item.productCode) : [],
      indeterminate: false,
      checkAll: e.target.checked,
    }));
  };
  render() {
    return (
      <div className="flex">
        <div className="left-group">
          <Button>添加</Button>&emsp;
          <div className="group-list">
            {this.state.groupList.map(item => {
              return (
                <div className="group" key={item.id}>
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="right-product flex-1">
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
          <CheckboxGroup className="product-checkbox-group" value={this.state.checkedList} onChange={this.onChange}>
            {this.state.productList.map(item => {
              if (item.productName !== '') {
                return (
                  <div className="product" key={item.productCode}>
                    <Checkbox value={item.productCode}>{item.productName}</Checkbox>
                  </div>
                );
              } else {
                return '';
              }
            })}
          </CheckboxGroup>
        </div>
      </div>
    );
  }
}
