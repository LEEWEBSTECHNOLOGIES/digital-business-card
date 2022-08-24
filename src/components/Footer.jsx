import React from "react";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import github from "../images/github.png";
import whatsapp from "../images/whatsapp.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <a href="https://twitter.com/Aliu94992120">
          <img
            src={twitter}
            alt="twitter"
            target="_blank"
            rel="noreferrer"
            className="twitter"
          />
        </a>
        <a
          href="https://web.facebook.com/?_rdc=1&_rdr"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="" className="facebook" />
        </a>
        <a
          href="https://www.instagram.com/leewebs2020/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="instagram" className="instagram" />
        </a>
        <a href="https://github.com/LEEWEBSTECHNOLOGIES/">
          <img src={github} alt="" className="github" />
        </a>
        <a
          href="https://wa.me/2348084838268" 
          target="_blank"
          rel="no opener noreferrer"
        >
          <img src={whatsapp} alt="whatsapp" className="whatsapp" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
