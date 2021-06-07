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
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // 检测React组件的语法错误
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <App />,
  document.getElementById('root')
);
// 记录页面性能
reportWebVitals();
