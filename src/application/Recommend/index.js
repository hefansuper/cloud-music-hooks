import React, { useEffect } from "react";
import Slider from "../../components/Slider/index";
import RecommendList from "../../components/RecommendList/index";
import Scroll from "../../baseUI/Scroll/index";
import { connect } from "react-redux";
import * as actionTypes from './store/actionCreators';
import { Content } from "./style.js";

function Recommend(props) {

  const { bannerList, recommendList } = props
  const { getBannerDataDispatch, getRecommendListDataDispatch } = props;


  useEffect(() => {
    getBannerDataDispatch();
    getRecommendListDataDispatch();
    //eslint-disable-next-line
  }, [])

  const bannerListJS = bannerList ? bannerList.toJS() : []
  const recommendListJS = recommendList ? recommendList.toJS() : []



  return (
    <Content>
      <Scroll className="list">
        <div>
          <Slider bannerList={ bannerListJS } />
          <RecommendList recommendList={ recommendListJS } />
        </div>
      </Scroll>
    </Content>
  );
}

// 映射 redux全局的state到组件的props上。
const mapStateToProps = (state) => ({
  bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList'])
})

// 映射dispatch到props上。
// 不要在这里将数据 toJS
// 不然每次 diff 比对 props 的时候都是不一样的引用，还是导致不必要的重渲染，属于滥用 immutable
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      console.log(actionTypes.getBannerList())
      dispatch(actionTypes.getBannerList())
    },
    getRecommendListDataDispatch() {
      dispatch(actionTypes.getRecommendList())
    }
  }


}


// 将ui组件包装为容器组件
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend))

