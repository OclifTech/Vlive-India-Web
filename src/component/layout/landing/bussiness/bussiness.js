import React from "react";
import "./bussiness.css";
import img1 from "./../../../../assests/img/settings.png";
import img2 from "./../../../../assests/img/chart.png";
import img3 from "./../../../../assests/img/social-marketing.png";

const Bussiness = () => {
  return (
    <>
      <div
        className=""
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
      >
        <div className="pt-5 text-center">
          <h2 className="m-auto font-weight-bold ">Bussinesses</h2>
          <div className="brd-bottom m-auto pt-2"></div>
        </div>
        <div className="text-center m-4">
          <p className="text-secondary px-5 bussiness-text-font">
            Growth is incomplete without goodness. From building assets of
            national relevance to transforming lives through self-reliance and
            sustainability, our vision is balancing growth with goodness.
          </p>
        </div>
        <div className="container mt-5">
          <div className="row mt-5 py-5">
          <div className="col-md-4 bg-image hover-shadow  hover-zoom  ripple">
              <div className="p-4">
              <div className="text-center  ">
                <img src={img1} alt="img" className="img-height" />
                <h5 className="text-font pt-3" > Yamasha Venture Limited</h5>
              </div>
              </div>
            </div>
            <div className="col-md-4 bg-image hover-shadow  hover-zoom  ripple">
              <div className="p-4">
              <div className="text-center  ">
                <img src={img2} alt="img" className="img-height" />
                <h5 className="text-font pt-3" >Vlive Foundation </h5>
              </div>
              </div>
            </div>
            <div className="col-md-4 bg-image hover-shadow  hover-zoom  ripple">
              <div className="p-4">
              <div className="text-center  ">
                <img src={img3} alt="img" className="img-height" />
                <h5 className="text-font pt-3" >INNOKAT SERVICES</h5>
              </div>
              </div>
            </div>
          </div>
          <div className="text-center my-5">
            <a href="#" className="btn btn-outline-primary">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bussiness;
