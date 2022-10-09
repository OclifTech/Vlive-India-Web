import React from "react";
import "./blog.css";
import img1 from "./../../../assests/img/img1.jpeg";
import img2 from "./../../../assests/img/img2.png";
import img3 from "./../../../assests/img/img3.jpg";

export default function Blog() {
  return (
    <div
      className=" blog-bg-img"
      data-aos="fade-up"
      data-aos-anchor-placement="center-center"
    >
      <div className="d-flex flex-lg-row flex-column">
        <div className="">
          <div className="card border-0 text-left">
            <img src={img1} className="card-img-top w-33" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-start h-bold text-success">
                Vlive india Speaker with Dolby audio India’s No.1 Brand
              </h5>
              <p className="card-text text-start">
                That true impact comes from defining changes that empower
                communities, propel growth and infuse goodness.
              </p>
              <a href="#" className="btn btn-primary text-left">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <div className="card border-0">
            <img src={img2} className="card-img-top w-33" alt="..." />
            <div className="card-body ">
              <h5 className="card-title text-start h-bold text-success">
                Yamasha Venture India’s Trusted Fintech company
              </h5>
              <p className="card-text text-start">
                That true impact comes from defining changes that empower
                communities, propel growth and infuse goodness.
              </p>
              <div className="text-left">
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="card border-0">
            <img src={img3} className="card-img-top w-33" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-start h-bold text-success">
                Yamasha Venture India’s Trusted Fintech company
              </h5>
              <p className="card-text text-start">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary text-start">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
