import React from "react";

import logo from "../image/Website Logo.png"
// import logonew from "../Images/logonew.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <>
      <footer class="footer text-wrap text-break">
        <div className="container-fluid overlay">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-12 ml-auto mx-auto my-auto footer-logo">
              <img
                className="img-fluid mx-auto my-auto"
                src={logo}
                alt="priority_pulse logo"
                width="1000"
                height="600"
              />
            </div>
            <div className="col-md-5 col-sm-12 col-12 ml-auto mx-3 pt-4 px-3 ">
              <a className="text-white mx-2 " href="#">
                <FacebookIcon fontSize="large" />
              </a>
              <a className="text-white mx-2" href="#">
                <LinkedInIcon fontSize="large" />
              </a>
              <a className="text-white mx-2" href="#">
                <InstagramIcon fontSize="large" />
              </a>
              <div className="container-fluid mt-2 mr-auto my-3">
                <ul className="list-unstyled mr-auto f4 text-wrap">
                  <li className="p-auto my-1 mx-3 text-center text-warning ">
                    <span ><PhoneIcon className="mx-auto" />
                    +91 999787877
                    </span>
                  </li>
                  <li className="p-auto my-1 text-center f4 text-warning">
                    <LocationOnIcon />
                    MCIIE,IIT BHU(Varanasi)
                  </li>
                  <li className="p-auto my-1 text-center f4 text-warning">
                    <EmailIcon />
                    prioritypulse@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;