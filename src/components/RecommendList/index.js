/*
 * @Author: stephenHe
 * @Date: 2020-08-04 11:34:42
 * @LastEditors: stephenHe
 * @LastEditTime: 2020-08-04 11:50:01
 * @Description: 代码千万条，注释第一条。注释不规范，维护两行泪
 * @FilePath: /cloud-music/src/components/RecommendList/index.js
 */

import React from "react";
import { getCount } from "../../../src/api/utils";
import { ListWrapper, ListItem, List } from "./style";

function RecommendList(props) {
  const { recommendList } = props;

  return (
    <ListWrapper>
      <h1 className="title"> 推荐歌单 </h1>
      <List>
        {props.recommendList.map((item, index) => {
          return (
            <ListItem key={item.id + index}>
              <div className="img_wrapper">
                <div className="decorate"></div>
                {/* 加此参数可以减小请求的图片资源大小 */}
                <img
                  src={item.picUrl + "?param=300x300"}
                  width="100%"
                  height="100%"
                  alt="music"
                />
                <div className="play_count">
                  <i className="iconfont play">&#xe885;</i>
                  <span className="count">{getCount(item.playCount)}</span>
                </div>
              </div>
              <div className="desc">{item.name}</div>
            </ListItem>
          );
        })}
      </List>
    </ListWrapper>
  );
}

export default React.memo(RecommendList);
