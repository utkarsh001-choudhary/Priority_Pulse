import React from 'react'
import Logo from '../image/Website Logo.png'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faLinkedin,
//   faFacebook,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";


function Footer() {
    return (
        <div className="x1">
            <div className="x2">
            {/* <img  className=" fa-react  footer-heading" src={Logo} alt="Priority Pulse"></img> */}

            </div>
            <div className="x3">
                <div className="x4">
                    <footer>
                    <div class="container-fluid">
                    <p className="social-container">
                        
                        <a
                        href="https://www.facebook.com/"
                        className="facebook social"
                        >
                        <i class="fab fa-facebook-f fa-2x" ></i>
                        {/* <FontAwesomeIcon icon={faFacebook} size="2x" /> */}
                        </a>
                        <a
                        href="#"
                        className="linkedin social"
                        >
                        {/* <FontAwesomeIcon icon={faLinkedin} size="2x" /> */}
                        
                        <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a
                        href="http://www.instagram.com/"
                        className="instagram social"
                        >
                        {/* <FontAwesomeIcon icon={faInstagram} size="2x" /> */}
                        <i class="fab fa-instagram-square fa-2x"></i>
                        </a>
                    </p>
                    </div>
                    </footer>
                </div>
                <div className="x5" style={{color:"yellow"}}>
                <p> <i class="fas fa-phone-alt lastlogo"></i>  +91-34575847838</p>
                 <p> <i class="fas fa-map-marker-alt  lastlogo"></i>  MCIIE,IIT BHU(Varanasi)</p>
                   <p><i class="fas fa-envelope  lastlogo"></i>  Priortypulse@gmail.com</p>
                     
                     
                </div>
            </div>
        </div>
    )
}

export default Footer;