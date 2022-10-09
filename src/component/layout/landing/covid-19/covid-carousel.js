import React, { Component } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
import "swiper/css/pagination";

import "./covid-carousel.css";

// import required modules
import { Pagination , Autoplay } from "swiper";

export class CovidCarousel extends Component {
  render() {
    return (
      <>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4500,
            // disableOnInteraction: false,
          }}
          modules={[ Pagination , Autoplay]}
          
       
        >
          <SwiperSlide className="" style={{display : 'inline-block' , textAlign : 'left'}} >
            <div className="ml-5 p-3"><h3 className="font-weight-bold ">Oxyzen Infrastructure</h3>
            <p className="lead">Bolestering the nation's Oxyzen  Infrastructure </p> </div>
          </SwiperSlide>
          <SwiperSlide className="">
          <div ><h2 className="font-weight-bold">Relief Metarieal</h2>
            <p className="lead"> lorem lorem lorem lorem </p> </div>
          </SwiperSlide>
          <SwiperSlide className="">
          <div ><h2 className="font-weight-bold">Relief Metarieal</h2>
            <p className="lead"> lorem lorem lorem lorem </p> </div>
          </SwiperSlide>
          <SwiperSlide className="">
          <div ><h2 className="font-weight-bold">Relief Metarieal</h2>
            <p className="lead"> lorem lorem lorem lorem </p> </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
  }
}

export default CovidCarousel;
