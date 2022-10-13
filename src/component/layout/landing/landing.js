import React, { Component } from "react";

import "./landing.css";

import ImgCarousel from "../../common/carousel/carousel";
import Covid_blog from "./covid-19/covid_blog";
import FeatureStories from "./F_Stories/featureStories";
import Bussiness from "./bussiness/bussiness";
import Blog from "../../common/blog/blog";
import ChairMan from "./chairman-corner/chairman";
import Footer from "../footer/footer";

export class Landing extends Component {
  render() {
    return (
      <div>
        <ImgCarousel />
        <div className="bg-img">
          <Covid_blog />
        </div>
        <div className="">
          <FeatureStories />
          <Blog />
        </div>
        <div className="bussiness-bg-img">
          <Bussiness />
        </div>
        {/* <div data-aos="fade-up" data-aos-anchor-placement="center-center">
          <Bussiness />
        </div> */}
        <div className="chairman-bg-img">
          <ChairMan  />
        </div>
      </div>
    );
  }
}

export default Landing;
