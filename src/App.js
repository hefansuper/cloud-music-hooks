/*
 * @Author: stephenHe
 * @Date: 2020-05-26 15:03:05
 * @LastEditors: stephenHe
 * @LastEditTime: 2020-08-03 17:33:33
 * @Description: 根组件
 * @FilePath: /cloud-music/src/App.js
 */

import React from "react";
import { GlobalStyle } from "./style";
import { IconStyle } from "./assets/iconfont/iconfont";
import { renderRoutes } from "react-router-config"; // renderRoutes读取路由配置文件转化为 router标签。
import { HashRouter } from "react-router-dom"; // 大的容器，根据url来匹配router组件，return出来不同的router组件。
import routes from "./routes/index.js";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        {/* 全局样式 */}
        <GlobalStyle />
        {/* 全局的iconfont */}
        <IconStyle />
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  );
}

export default App;
