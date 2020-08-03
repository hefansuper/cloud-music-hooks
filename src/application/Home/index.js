import React from "react";
import { renderRoutes } from "react-router-config";
import { Top, TabItem, Tab } from "./style";
import { NavLink } from "react-router-dom";

function Home(props) {
  const { route } = props;

  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>

      <Tab>
        {/* 推荐 */}
        <NavLink to="/recommend" activeClassName="selected">
          <TabItem>
            <span>推荐</span>
          </TabItem>
        </NavLink>

        {/* 歌手 */}
        <NavLink to="/singers" activeClassName="selected">
          <TabItem>
            <span>歌手</span>
          </TabItem>
        </NavLink>

        {/* 排行榜 */}
        <NavLink to="/rank" activeClassName="selected">
          <TabItem>
            <span>排行榜</span>
          </TabItem>
        </NavLink>
      </Tab>

      {/* 要展示router的数组第二层的路由必须要配置 */}
      {renderRoutes(route.routes)}
    </div>
  );
}

export default React.memo(Home);
