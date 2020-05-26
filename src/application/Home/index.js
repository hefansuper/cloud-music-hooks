/*
 * @Author: stephenHe
 * @Date: 2020-05-26 17:10:21
 * @LastEditors: stephenHe
 * @LastEditTime: 2020-05-26 17:49:28
 * @Description: Home组件。
 * @FilePath: /cloud-music/src/application/Home/index.js
 */
import React from "react";
import { renderRoutes } from "react-router-config";

function Home(props) {
  const { route } = props;
  return (
    <div>
      <div>Home</div>
      {renderRoutes(route.routes)}
    </div>
  );
}

export default React.memo(Home);
