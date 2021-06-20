/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Magic
 * @Date: 2021-06-02 11:04:31
 * @LastEditors: Magic
 * @LastEditTime: 2021-06-05 00:53:55
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ConfigProvider } from 'antd';
import reportWebVitals from './reportWebVitals';
// 引入antd多语言
import 'moment/locale/zh-cn';
import locale from 'antd/lib/locale/zh_CN';

ReactDOM.render(
  // 检测React组件的语法错误
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <ConfigProvider locale={locale}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
);
// 记录页面性能
reportWebVitals();

