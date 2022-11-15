import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { masterPanelConfig } from "../../../../config";
import blogImg from "./../../../../assests/img/img3.jpg";
import './../blogById/blogById.css'
import "./blogs.css";

export default function Blogs() {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${masterPanelConfig.apiBaseUrl}/api/blog`)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          setBlogs(res.data);
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);
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
            {blogs.map((blog, index) => {
              return (
                <div className="col-lg-4 mt-4 " key={index}>
                  <Link to={`/blog/${blog._id}`}>
                    <div class="card  text-white border-0 rounded-0 bg-image  hover-zoom hover-shadow ripple">
                      <img src={blog.img} class="card-img" alt="..." />
                      <div
                        class="card-img-overlay "
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}
                      >
                        <h5 class="card-title text-light font-weight-bold">
                          {blog.title}
                        </h5>
                        <p class="card-text mt-5 pt-5" style={{overflow : "hidden"}}>{blog.subtitle}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
