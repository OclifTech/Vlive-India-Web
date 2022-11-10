import React from "react";
import aboutImg from './../../../../assests/img/New folder/about-img.png';

const About = () => {
  return (
    <>
      <div >
        <div className="pb-5 text-center">
          <img
            src={aboutImg}
            alt=""
            className="about-img"
          />
        </div>
        <div className="container">
          <h4 className="text-dark font-weight-bold border-bottom-success">About us </h4>
          <p className="mt-4 ">
            Vlive India is one of India’s largest companies that
            invests in different ventures of the nation in order to support the
            newcomer entrepreneurs and Indian startups. It started in 2016 and
            is still helping tons of people grow. Besides investing in other
            ventures and startups Vlive India Also has its own sub venture that
            deals in heavy electronics (basically LED TV) manufacturing and
            trading as well. Vlive India is the main investor of more than a
            dozen startups in India. The company has invested in different
            natured startups (such as IT, electronics, production house, media
            etc). The company has won lots of achievements and awards for its
            performance and services. Vlive India is one of those companies that
            believes in working and growing with ethics and that's the reason
            that the company has won not only success but also the trust of its
            clients and the entire nation
          </p>
          <div className="mt-5">
          <h4 className="text-dark font-weight-bold border-bottom-success">Vision</h4>
          <p className="mt-4"> The long term and ultimate
            vision of the company is to establish a powerful network not only in
            India but also around the globe. The company also believes that it
            can grow only when others will be growing by the help of the
            company.</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default About;
