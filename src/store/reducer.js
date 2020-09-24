/*
 * @Author: stephenHe
 * @Date: 2020-08-03 17:17:39
 * @LastEditors: stephenHe
 * @LastEditTime: 2020-09-23 18:04:58
 * @Description:合并redux
 * @FilePath: /cloud-music/src/store/reducer.js
 */

import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from './../application/Recommend/store/index'

// 合并reducer
export default combineReducers({
    recommend: recommendReducer
});
