import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYelp,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  library.add(faEnvelope, faKey);

  return (
    <div className="footer__container">
      <div className="footer__left">
        <p>Designed and Developed by David Yuen</p>
        <p>© 2022 David Yuen</p>
      </div>
      <div className="footer__right">
        <p className="footer__title">SOCIALS</p>
        <div className="social_links">
          <a
            href="https://www.instagram.com/sweetpress.sugarcane/"
            className="instagramSocial"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
          </a>
          <a
            href="https://www.instagram.com/sweetpress.sugarcane/"
            className="instagramSocial"
          >
            <FontAwesomeIcon icon={faYelp} size="2x" color="red" />
          </a>
          <a
            href="https://www.instagram.com/sweetpress.sugarcane/"
            className="instagramSocial"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
