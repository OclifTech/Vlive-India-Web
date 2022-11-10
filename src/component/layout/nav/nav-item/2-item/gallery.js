import React from "react";
import { Link } from "react-router-dom";
import gimg from "./../../../.../../../../assests/img/team.jpg";
import "./../../nav.css";
import "./gallery.css";

export const PopUpImg = (props) => {
  return (
    <div className="popup-img-position">
      <div className="text-right mt-5 pr-lg-4 pr-1">
        <i class="far fa-times-circle text-light fa-3x cursrHover" onClick={()=>{props.setClick(false)}}></i>
      </div>
      <div className="imgPosition">
        <div className="px-5">
          <img src={gimg} alt="#img" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [click, setClick] = React.useState(false);
  return (
    <div className="" style={{ backgroundColor: "black" }}>
      <div>
        <img src={gimg} alt="banner" className="gallery-banner" />
      </div>
      <div className="container mt-5 pb-5">
        <div className="my-5">
          <h3 className="border-bottom-success text-light">Gallery</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-4 col-6 my-2 ">
            <Link to="" onClick={() => setClick(true)}>
              <img src={gimg} alt="#img" className="img-fluid" />
            </Link>
          </div>
          <div className="col-lg-4 col-sm-4 col-6 my-2">
            <div>
              <img src={gimg} alt="#img" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-6 my-2 ">
            <div>
              <img src={gimg} alt="#img" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-6 my-2 ">
            <div>
              <img src={gimg} alt="#img" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-6 my-2">
            <div>
              <img src={gimg} alt="#img" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-6 my-2">
            <div>
              <img src={gimg} alt="#img" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-6 my-2">
            <div>
              <img src={gimg} alt="#img" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      {click ?  <PopUpImg setClick={setClick} /> : null }
    </div>
  );
};

export default Gallery;
