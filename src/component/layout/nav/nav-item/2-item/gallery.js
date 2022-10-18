import React from "react";
import gimg from './../../../.../../../../assests/img/team.jpg';
import './../../nav.css';

const Gallery = () => {
  return (
    <div className="" style={{backgroundColor : 'black'}}>
    <div>
      <img src={gimg} alt="banner" className="gallery-banner" />
    </div>
    <div className="container mt-5">
      <div className="my-5">
      <h3 className="border-bottom-success text-light">Gallery</h3>
      </div>
      <div className="row">
        <div className="col-lg-3 col-sm-4 col-6 my-2 " >
            <div>
              <img src={gimg} alt="#img" className="img-fluid" />
            </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-6 my-2">
            <div>
              <img src={gimg} alt="#img" className="img-fluid" />
            </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-6 my-2 ">
            <div>
              <img src={gimg} alt="#img" className="img-fluid" />
            </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-6 my-2 ">
            <div>
              <img src={gimg} alt="#img" className="img-fluid" />
            </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-6 my-2">
            <div>
              <img src={gimg} alt="#img" className="img-fluid" />
            </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-6 my-2">
            <div>
              <img src={gimg} alt="#img" className="img-fluid" />
            </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-6 my-2">
            <div>
              <img src={gimg} alt="#img" className="img-fluid" />
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Gallery;
