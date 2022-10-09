import React from "react";
import "./featureStories.css";

const FeatureStories = () => {
  return (
    <div className="feature-bg-img" data-aos="fade-up"
    data-aos-anchor-placement="center-center"  data-aos-offset='100'>
      <div className="pt-5 text-center">
        <h2 className="text-center font-weight-bold">Featured Stories</h2>
        <div className="brd-bottom m-auto pt-2"></div>
      </div>
      <div className="text-center pt-4 px-5">
        <h5 className="text-secondary app">
          We believe that true impact comes from defining changes that empower
          communities, propel growth and infuse goodness.
        </h5>
      </div>
      <div className="pt-5">
        {/* <Blog /> */}
      </div>
    </div>
  );
};

export default FeatureStories;
