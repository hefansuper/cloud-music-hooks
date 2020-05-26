/*
 * @Author: stephenHe
 * @Date: 2020-05-26 15:03:05
 * @LastEditors: stephenHe
 * @LastEditTime: 2020-05-26 15:16:06
 * @Description: 入门文件
 * @FilePath: /cloud-music/index.js
 */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
