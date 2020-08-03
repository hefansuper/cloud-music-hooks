/*
 * @Author: stephenHe
 * @Date: 2020-08-03 16:59:16
 * @LastEditors: stephenHe
 * @LastEditTime: 2020-08-03 17:24:18
 * @Description: store的方法。
 * @FilePath: /cloud-music/store/index.js
 */

import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
