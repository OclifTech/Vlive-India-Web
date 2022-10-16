import React from "react";
import "./distribute.css";

// image load

import banner from "./../../../../assests/img/New folder/img3.jpg";
import banner1 from "./../../../../assests/img/New folder/img2.jpg";
import banner2 from "./../../../../assests/img/New folder/img1.jpg";

const Distribute = () => {
  return (
    <>
      <div className=" container ">
        <div className="row">
          <div className="col-lg-6 bg-image hover-zoom">
            <img src={banner} alt="img" className="img-fluid w-100" />
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="d-flex flex-column justify-content-center align-items-center ">
              <div className="bg-white p-4 ">
                <h4 className="">
                  Yamasha Venture India’s Trusted Fintech company
                </h4>
                <p className="text-left">
                  That true impact comes from defining changes that empower
                  communities, propel growth and infuse goodness.
                </p>
              </div>
              <div className="row mt-3 d-hide">
                <div className="col-lg-6  bg-image hover-zoom ">
                  <img src={banner1} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-6 bg-image hover-zoom">
                  <img src={banner2} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Distribute;
