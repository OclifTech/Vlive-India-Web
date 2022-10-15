import React, { Component } from "react";
import banner1 from "./../../../assests/img/banner1.png";
import banner2 from "./../../../assests/img/banner2.png";
import banner3 from "./../../../assests/img/banner3.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./carousel.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

export class ImgCarousel extends Component {
  render() {
    return (
      <>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide">
            <img
              src={banner3}
              alt="demo"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={banner1} alt="demo" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={banner2} alt="demo" />
          </SwiperSlide>
        </Swiper>
      </>
    );
  }
}

export default ImgCarousel;
