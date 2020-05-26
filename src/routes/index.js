/*
 * @Author: stephenHe
 * @Date: 2020-05-26 16:52:21
 * @LastEditors: stephenHe
 * @LastEditTime: 2020-05-26 17:49:10
 * @Description: 路由配置页面。
 * @FilePath: /cloud-music/src/routes/index.js
 */

import React from "react";
import { Redirect } from "react-router-dom";
import Home from "../application/Home";
import Recommend from "../application/Recommend";
import Singers from "../application/Singers";
import Rank from "../application/Rank";

export default [
  //重置路由
  {
    path: "/",
    component: Home,
    exact: true,
    render: () => <Redirect to={"/Home"} />,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/recommend",
    component: Recommend,
  },
  {
    path: "/singers",
    component: Singers,
  },
  {
    path: "/rank",
    component: Rank,
  },
];
