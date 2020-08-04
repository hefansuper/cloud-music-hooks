/*
 * @Author: stephenHe
 * @Date: 2020-08-04 10:28:53
 * @LastEditors: stephenHe
 * @LastEditTime: 2020-08-04 11:31:34
 * @Description: 代码千万条，注释第一条。注释不规范，维护两行泪
 * @FilePath: /cloud-music/src/components/Slider/index.js
 */

import React, { useEffect, useState } from "react";
import { SliderContainer } from "./style";
// import "swiper/css/swiper.css";
import Swiper from "swiper";

function Slider(props) {
  const [sliderSwiper, setSliderSwiper] = useState(null);
  const { bannerList } = props;

  useEffect(() => {
    // bannerList的长度大于0且没有轮播图
    if (bannerList.length > 0 && !sliderSwiper) {
      // 初始化轮播图
      let newSliderSwiper = new Swiper(".slider-container", {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: { el: ".swiper-pagination" },
      });
      setSliderSwiper(newSliderSwiper);
    }
  }, [bannerList, sliderSwiper]);

  return (
    <SliderContainer>
      <div className="before"></div>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {bannerList.map((slider, index) => {
            return (
              <div className="slider-nav" key={index}>
                <img
                  src={slider.imageUrl}
                  width="100%"
                  height="100%"
                  alt="推荐"
                />
              </div>
            );
          })}
        </div>
      </div>
    </SliderContainer>
  );
}

// 浅比较
export default React.memo(Slider);
