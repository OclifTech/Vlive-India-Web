import React, { Component } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./carousel.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

// importing carousel img
import carouselOne from "../../../assests/img/carouselOne.png";
import carouselTwo from "../../../assests/img/carouselTwo.png";
import carouselThree from "../../../assests/img/carouselThree.png";

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
            <img src={carouselOne} alt="demo" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={carouselTwo} alt="demo" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={carouselThree} alt="demo" />
          </SwiperSlide>
        </Swiper>
      </>
    );
  }
}

export default ImgCarousel;
