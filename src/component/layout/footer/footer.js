import "./footer.css";

import footeLogo from "./../.././../assests/logo/logo.png";
const Footer = () => {
  return (
    <div className="mt-5 pt-5">
      <hr />
      <div className="row mr-0">
        <div className="col-lg-3">
          <div className="lineHeight">
            <ul className="d-flex justify-content-left align-items-center flex-column pt-4">
              <a href="" className="nav-link ">
                <h5 className="nav-link">Businesses </h5>
              </a>
              <li className="nav-link ">Vlive India Private Limited</li>
              <li className="nav-link ">Innokat Services Pvt. Ltd</li>
              <li className="nav-link ">Yamasha Venture Limited</li>
              <li className="nav-link ">Vlive Foundation</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="lineHeight">
            <ul className="d-flex justify-content-center align-items-center flex-column pt-4 ">
              <a href="" className="nav-link">
                <h5 className="nav-link ">Industry</h5>
              </a>
              <li className="nav-link">Electronic</li>
              <li className="nav-link">Education</li>
              <li className="nav-link">Wealth Managment</li>
              <li className="nav-link">Media</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="footer-item-lineHeight">
            <ul className="d-flex justify-content-center align-items-center flex-column pt-5">
              {/* <a href="" className="nav-link ">
                <h5 className="nav-link "></h5>
              </a> */}
              <li href="" className="nav-link ">
                <a className="nav-item  color">About us</a>
              </li>

              <li href="" className="nav-link ">
                <a className="nav-item  color">Careers</a>
              </li>
              <li href="" className="nav-link ">
                <a className="nav-item  color">Contact us</a>
              </li>

              <li href="" className="nav-link ">
                <a className="nav-item  color">Blogs</a>
              </li>
              <li href="" className="nav-link ">
                <a className="nav-item  color">Association</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-1 p-lg-5 m-lg-4">
          <div className="footer-border-left"></div>
        </div>
        <div className="col-lg-3 p-lg-3 mt-lg-3">
          <div className="d-flex flex-column mx-auto align-items-center pl-2">
            <img
              src={footeLogo}
              alt="#error"
              className="mr-3 mt-lg-5 footer-logo"
            />
            <div
              className="d-flex justify-content-center align-items-center mt-5 mr-lg-5"
              style={{ gap: "1.5rem" }}
            >
              <i class="fab fa-facebook-f text-primary icon-width"></i>
              <i class="fab fa-twitter text-primary icon-width"></i>
              <i class="fab fa-instagram text-primary icon-width"></i>
              <i class="fab fa-linkedin-in text-primary icon-width"></i>
              <i class="fab fa-youtube text-primary icon-width"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bg-dark">
        <div className="text-center p-3">
          <h6 className="text-light">
            &copy; 2022 Vlive India Private Limited
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
