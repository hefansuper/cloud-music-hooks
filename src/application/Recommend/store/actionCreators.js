/*
 * @Author: stephenHe
 * @Date: 2020-09-22 14:25:38
 * @LastEditors: stephenHe
 * @LastEditTime: 2020-09-28 15:57:46
 * @Description: 放不同 action 的地方
 * @FilePath: /cloud-music/src/application/Recommend/store/actionCreators.js
 */

import * as actionTypes from './constants.js'
import { fromJS } from 'immutable';// 将 JS 对象转换成 immutable 对象
import { getBannerRequest, getRecommendListRequest } from '../../../api/request'


const changeBannerList = (data) => ({
    type: actionTypes.CHANGE_BANNER,
    data: fromJS(data)
})

const changeRecommendList = (data) => ({
    type: actionTypes.CHANGE_RECOMMEND_LIST,
    data: fromJS(data)
})
const changeEnterLoading = (data) => ({
    type: actionTypes.CHANGE_ENTER_LOADING,
    data: fromJS(data)
})


const getBannerList = () => {
    return (dispatch) => {
        getBannerRequest().then(data => {
            dispatch(changeBannerList(data.banners))
            // 改变loading
            dispatch(changeEnterLoading(false))
        }).catch((error) => {
            console.log('轮播图报错', error)
        })
    }
}

const getRecommendList = () => {
    return (dispatch) => {
        getRecommendListRequest().then(data => {
            dispatch(changeRecommendList(data.result))
        }).catch((error) => {
            console.log('推荐歌单数据传输错误', error)
        })
    }
}

export {
    changeBannerList,
    changeRecommendList,
    getBannerList,
    getRecommendList
}
