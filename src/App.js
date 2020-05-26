/*
 * @Author: stephenHe
 * @Date: 2020-05-26 15:03:05
 * @LastEditors: stephenHe
 * @LastEditTime: 2020-05-26 16:31:41
 * @Description: 根组件
 * @FilePath: /cloud-music/src/App.js
 */

import React from "react";
import { GlobalStyle } from "./style";
import { IconStyle } from "./assets/iconfont/iconfont";

function App() {
  return (
    <div className="App">
      {/* 全局样式 */}
      <GlobalStyle />
      {/* 全局的iconfont */}
      <IconStyle />
      <i className="iconfont">&#xe62b;</i>
    </div>
  );
}

export default App;
