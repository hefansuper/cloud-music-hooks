/*
 * @Author: stephenHe
 * @Date: 2020-08-04 11:41:53
 * @LastEditors: stephenHe
 * @LastEditTime: 2020-09-22 14:20:15
 * @Description: 代码千万条，注释第一条。注释不规范，维护两行泪
 * @FilePath: /cloud-music/src/api/utils.js
 */

const getCount = (count) => {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
};

export { getCount };
