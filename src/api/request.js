/*
 * @Author: stephenHe
 * @Date: 2020-09-22 14:19:17
 * @LastEditors: stephenHe
 * @LastEditTime: 2020-09-22 14:43:36
 * @Description: 
 * @FilePath: /cloud-music/src/api/request.js
 */
import { axiosInstance } from './config.js'

const getBannerRequest = () => {
    return axiosInstance.get('/banner')
}

const getRecommendListRequest = () => {
    return axiosInstance.get('/personalized')
}


export {
    getBannerRequest,
    getRecommendListRequest
}