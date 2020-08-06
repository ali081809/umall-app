import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom"
import App from './App';
// 引入reset.css 
import "./assets/css/reset.css"
// 引入rem.js
import "./assets/js/rem"
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>
  ,
  document.getElementById('root')
);
