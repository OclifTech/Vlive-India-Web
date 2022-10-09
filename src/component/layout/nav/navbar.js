import React, { Component } from "react";
import "./nav.css";
import logo from './../../../assests/logo/logo.png';

export class Navbar extends Component {
  render() {
    return (
      <header className="">
      <div className="overlay"></div>
      <div className="container-fluid fixed-top">
        <div className="row scroll">
          <div className="col-3">
            <div className="p-3 brd-right text-center" >
            <img src={logo} alt="logo" className="logo" />
            </div>
          </div>
          <div className="col-9" id="nav-item">
            <ul className="nav  me-auto app color">
              <li className="nav-item">
                <a className="nav-link link-color" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-color" href="#">
                  Investors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-color" href="#">
                Media
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-color" href="#">
                  Career
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-color" href="#">
                  Contact Us
                </a>
              </li>

            </ul>
            <ul className="nav  me-auto bg-color ">
              <li className="nav-item">
                <a className="nav-link link-color-1 app" aria-current="page" href="#">
                  Bussiness
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-color-1 app" href="#">
                Association
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-color-1 app" href="#">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-color-1 app" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-color-1 app" href="#">
                Venture Capital
                </a>
              </li>
            </ul>
          </div>
          <div id="bars" className="col-8 text-left p-3">
            <div className="">
            <i className="fa fa-bars fa-2x"></i>
            </div>
            </div>
        </div>
      </div>

      </header>

      
    );
  }
}

export default Navbar;
