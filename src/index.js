import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom"
import App from './App';
// 引入reset.css 
import "./assets/css/reset.css"
// 引入rem.js
import "./assets/js/rem"
import { Provider } from "react-redux"
// 引入仓库
import store from "./store"
// 引入移动端的公共样式
import 'antd-mobile/dist/antd-mobile.css';
// 给图片添加前缀
Component.prototype.$img="http://localhost:3000"
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>

  ,
  document.getElementById('root')
);
