import React from "react";
import { Link } from "react-router-dom";
// import Blog from '../blog';
import blogImg from "./../../../../assests/img/img3.jpg";
import "./blogs.css";

export default function Blogs() {
  return (
    <div className="Blogs">
      <div className="img-section ">
        <img src={blogImg} alt="blog img" className="blogs-top-img" />
        <div className="b-title">
          <h2 className="text-light b-text-font">Blogs</h2>
          <h6 className="text-light">
            In this section, we handpick untold stories and experiences that
            make <br /> defining impact on the society.
          </h6>
        </div>
      </div>
      <div className="blog-section container">
        <div className="text-left  pt-5">
          <h3 className="h-left-border pl-3"> Read Our Latest Blog</h3>
        </div>
        <div className="mt-5">
          <div className="row">
            <div className="col-lg-4 ">
              <Link to='#'>
              <div class="card  text-white border-0 rounded-0 bg-image  hover-zoom hover-shadow ripple" >
                <img src={blogImg} class="card-img" alt="..." />
                <div class="card-img-overlay " style={{backgroundColor : 'rgba(0, 0, 0, 0.3)'}}>
                  <h5 class="card-title text-light font-weight-bold">In this section, we handpick untold stories and experiences that make</h5>
                  <p class="card-text mt-5 pt-5">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  {/* <div className="hover-overlay">
                    <div className="mask" style={{backgroundColor : 'rgba(16, 100, 235, 0.2)'}}></div>
                  </div> */}
                </div>
              </div>
              </Link>
            </div>
            <div className="col-lg-4 ">
              <Link to='#'>
              <div class="card  text-white border-0 rounded-0 bg-image  hover-zoom hover-shadow ripple" >
                <img src={blogImg} class="card-img" alt="..." />
                <div class="card-img-overlay " style={{backgroundColor : 'rgba(0, 0, 0, 0.3)'}}>
                  <h5 class="card-title text-light font-weight-bold">In this section, we handpick untold stories and experiences that make</h5>
                  <p class="card-text mt-5 pt-5">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  {/* <div className="hover-overlay">
                    <div className="mask" style={{backgroundColor : 'rgba(16, 100, 235, 0.2)'}}></div>
                  </div> */}
                </div>
              </div>
              </Link>
            </div>
            <div className="col-lg-4 ">
              <Link to='#'>
              <div class="card  text-white border-0 rounded-0 bg-image  hover-zoom hover-shadow ripple" >
                <img src={blogImg} class="card-img" alt="..." />
                <div class="card-img-overlay " style={{backgroundColor : 'rgba(0, 0, 0, 0.3)'}}>
                  <h5 class="card-title text-light font-weight-bold">In this section, we handpick untold stories and experiences that make</h5>
                  <p class="card-text mt-5 pt-5">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  {/* <div className="hover-overlay">
                    <div className="mask" style={{backgroundColor : 'rgba(16, 100, 235, 0.2)'}}></div>
                  </div> */}
                </div>
              </div>
              </Link>
            </div>
            <div className="col-lg-4 mt-5">
              <Link to='#'>
              <div class="card  text-white border-0 rounded-0 bg-image  hover-zoom hover-shadow ripple" >
                <img src={blogImg} class="card-img" alt="..." />
                <div class="card-img-overlay " style={{backgroundColor : 'rgba(0, 0, 0, 0.3)'}}>
                  <h5 class="card-title text-light font-weight-bold">In this section, we handpick untold stories and experiences that make</h5>
                  <p class="card-text mt-5 pt-5">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  {/* <div className="hover-overlay">
                    <div className="mask" style={{backgroundColor : 'rgba(16, 100, 235, 0.2)'}}></div>
                  </div> */}
                </div>
              </div>
              </Link>
            </div>
            <div className="col-lg-4 mt-5 ">
              <Link to='#'>
              <div class="card  text-white border-0 rounded-0 bg-image  hover-zoom hover-shadow ripple" >
                <img src={blogImg} class="card-img" alt="..." />
                <div class="card-img-overlay " style={{backgroundColor : 'rgba(0, 0, 0, 0.3)'}}>
                  <h5 class="card-title text-light font-weight-bold">In this section, we handpick untold stories and experiences that make</h5>
                  <p class="card-text mt-5 pt-5">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  {/* <div className="hover-overlay">
                    <div className="mask" style={{backgroundColor : 'rgba(16, 100, 235, 0.2)'}}></div>
                  </div> */}
                </div>
              </div>
              </Link>
            </div>
            <div className="col-lg-4 mt-5 ">
              <Link to='#'>
              <div class="card  text-white border-0 rounded-0 bg-image  hover-zoom hover-shadow ripple" >
                <img src={blogImg} class="card-img" alt="..." />
                <div class="card-img-overlay " style={{backgroundColor : 'rgba(0, 0, 0, 0.3)'}}>
                  <h5 class="card-title text-light font-weight-bold">In this section, we handpick untold stories and experiences that make</h5>
                  <p class="card-text mt-5 pt-5">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  {/* <div className="hover-overlay">
                    <div className="mask" style={{backgroundColor : 'rgba(16, 100, 235, 0.2)'}}></div>
                  </div> */}
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
