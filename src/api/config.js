/*
 * @Author: stephenHe
 * @Date: 2020-09-22 14:20:24
 * @LastEditors: stephenHe
 * @LastEditTime: 2020-09-23 18:59:26
 * @Description: 
 * @FilePath: /cloud-music/src/api/config.js
 */

import axios from 'axios';
const baseUrl = 'http://192.168.68.172:3000';

//axios 的实例及拦截器配置
const axiosInstance = axios.create({
    baseURL: baseUrl
});

// response的拦截器
axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, "网络错误");
    }
);


export {
    baseUrl,
    axiosInstance
};
