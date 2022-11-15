import React from "react";
import "./nav.css";
import logo from "./../../../assests/logo/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = React.useState(false);

  return (
    <header className="">
      <div className="overlay"></div>
      <div className="container-fluid fixed-top">
        <div className="row scroll">
          <div className="col-lg-3 col-sm-7 col-8">
            <div className="p-3 brd-right text-center bg-image  hover-zoom hover-shadow ">
              <Link to={"/"}>
                <img src={logo} alt="logo" className="logo" />{" "}
              </Link>
            </div>
          </div>
          <div className="col-lg-9 col-sm-8 col-7" id="nav-item">
            <ul className="nav  mx-auto app color">
              <li className="nav-item">
                <Link
                  className="nav-link link-color"
                  aria-current="page"
                  to="/about"
                >
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link link-color" to="/career">
                  Career
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-color" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <ul className="nav  my-auto bg-color ">
              <li className="nav-item">
                <Link
                  className="nav-link link-color-1 app"
                  aria-current="page"
                  to="/businesses"
                >
                  Bussiness
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-color-1 app" to="/association">
                  Association
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link link-color-1 app" to="/blogs">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-color-1 app" to="/gallery">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div id="bars" className="col-4 text-left p-3 " >
            <div className="">
              <i className="fa fa-bars fa-2x" onClick={()=>setClick(true)}></i>
            </div>
          </div>
          {click ? (
            <div id="mySidenav" className="sidenav d-lg-none">
              <button
                className="closebtn"
                onClick={()=>setClick(false)}
              >
                &times;
              </button>
              <Link to="/about">About</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/career">Career</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/association">Association</Link>
              <Link to="/bussiness">Business</Link>
              <Link to="/contactus">Contact Us</Link>

            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
