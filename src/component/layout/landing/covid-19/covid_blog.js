import React, { Component } from "react";
import covidImg from "./../../../../assests/img/covid_img.jpg";
import "./covid_blog.css";

export class Covid_blog extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-7 text-center">
              <h3 className="font-size  text-md-left mr-4 mr-lg-0">
                <span className="brd-bottom m-lg-3 py-3 text-center">
                  Battling
                </span>
                COVID19 through Goodness
              </h3>
              <div className="text-left ml-4 ml-lg-5 mt-5">
                <h4 className=" pl-3 h-bold">The Vlive Group</h4>
              </div>
              <div className="text-center  mx-auto px-5">
                <p className=" px-lg-3 t-bold">
                  Vlive India is one of those companies that believes in ethics
                  and helping others. At the time of pandemic, it helped people
                  in need. Though Vlive foundation, it served more than 1,00,000
                  people at that time. Food, water, educational services and
                  health services as well were served to the poor people at the
                  time of epidemic. Chairman and the entire team of Vlive India
                  strongly believes in business and humanity ethics as well.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <img src={covidImg} alt="" className="mt-2 mx-auto img-fluid1" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Covid_blog;
