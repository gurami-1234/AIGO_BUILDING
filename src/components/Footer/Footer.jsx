import React from "react";
import { Link } from "react-router-dom";
import { ImLinkedin2 } from "react-icons/im";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { AiFillYoutube, AiOutlineCopyright } from "react-icons/ai";
import FooterCSS from "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="logo">
          <Link to="/">Aigo Building</Link>
        </div>

        {/* ---- PAGE LINKS ---- */}

        <div className="page-links">
          <div className="Home">
            <Link to="/">Home</Link>
          </div>
          <div className="project">
            <Link to="/">Projects</Link>
          </div>
          <div className="about">
            <Link to="/">About us</Link>
          </div>
          <div className="contact">
            <Link to="/">Contact</Link>
          </div>
        </div>

        {/* ---- SOCIAL MEDIA LINKS ---- */}

        <div className="social-media-links">
          <div className="linkedin">
            <Link to="/">
              <ImLinkedin2 />
            </Link>
          </div>
          <div className="whatsapp">
            <Link to="/">
              <BsWhatsapp />
            </Link>
          </div>
          <div className="facebook">
            <Link to="/">
              <FaFacebookF />
            </Link>
          </div>
          <div className="instagram">
            <Link to="/">
              <FaInstagram />
            </Link>
          </div>
          <div className="youtube">
            <Link to="/">
              <AiFillYoutube />
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright-container">
        <div className="copyright">
          <AiOutlineCopyright />
          <p>2024 Aigo Building - All rights reserved</p>
        </div>
        <div className="privacy-policy">
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
