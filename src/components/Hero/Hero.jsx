import $ from "jquery";
import React from "react";
import "../Hero/Hero.css";
import spaceLines from "../../assets/space-lines.png";
import eye from "../../assets/eye.png";
import stairs from "../../assets/stairs.png";
import pillar from "../../assets/intro-pillar.png";
import cube from "../../assets/intro-cube.png";
import cubes from "../../assets/intro-cubes.png";
import laptop from "../../assets/laptop.png";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
} from "react-icons/fa";
import { BsArrowDown } from "react-icons/bs";
import { IoMdArrowDropup } from "react-icons/io";
import { HiOutlinePencilSquare } from "react-icons/hi2";

export const Hero = () => {
  $(document).ready(function () {
    var homepage = document.querySelector("#Homepage");
    homepage.onload = scrolled;
    homepage.onscroll = scrolled;

    function scrolled() {
      const scrolledTop = homepage.scrollTop;
      const currentScrolled = scrolledTop + homepage.clientHeight;
      const totalScrolled = homepage.scrollHeight;

      const percentageScrolled = Math.round(
        (100 / totalScrolled) * currentScrolled
      );

      $(".progress-bar").click(function () {
        homepage.scrollTop = 0;
      });

      if (scrolledTop > 100) {
        $(".progress-bar").css({ display: "grid" });
      } else {
        $(".progress-bar").css({ display: "none" });
      }

      $(".progress-value").css({
        background: `conic-gradient(var(--primary-color) ${percentageScrolled}%, transparent 0 100%)`,
      });
    }
  });

    document.addEventListener("mousemove", parallax);
    function parallax(e) {
      document.querySelectorAll(".elements").forEach((element) => {
        const speed = element.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 200;
        const y = (window.innerHeight - e.pageY * speed) / 200;

        element.style.transform = "translate(" + x + "px," + y + "px)";
      });
    }

  return (
    <section id="Hero" className="hero-section">
      <img src={stairs} data-speed="2" className="stair-el elements" alt="" />
      <img src={pillar} data-speed="-6" className="pillar-el elements" alt="" />
      <img src={eye} data-speed="0" className="eye-el elements" alt="" />
      <img src={laptop} data-speed="3" className="laptop-el elements" alt="" />
      <img src={cube} data-speed="-3" className="cube-el elements" alt="" />
      <img src={cubes} data-speed="-9" className="cubes-el elements" alt="" />
      <img className="space-lines" src={spaceLines} alt="" />

      <div className="social-links-bottom">
        <a
          href="https://www.linkedin.com/company/opinhacks/"
          target="_blank"
          className="in-icon"
        >
          <FaLinkedinIn fontSize="1.6rem" />
        </a>
        <a
          href="https://twitter.com/opinhacks"
          target="_blank"
          className="twitter-icon"
        >
          <FaTwitter fontSize="1.5rem" />
        </a>
        <a
          href="https://www.instagram.com/opinhacks/"
          target="_blank"
          className="instagram-icon"
        >
          <FaInstagram fontSize="1.5rem" />
        </a>
      </div>

      <div className="hero-container">
        <div className="hero-title">
          <div className="opin-text">OPIN</div>
          <div className="hacks-text">HACKS</div>
        </div>
        <div className="hero-subtitle">
          29 Sep - 3 Oct 2023 &nbsp;  <span className="date-divider">|</span> &nbsp;
          CHHATTISGARH
        </div>
        <div className="social-links">
          <a href="https://discord.gg/KnthBxzApR" target="_blank">
            <button className="discord-btn">
              {/* <FaDiscord fontSize="1.6rem"/> */}
              DISCORD
            </button>
          </a>
          <a href="https://lu.ma/opin-hacks" target="_blank">
            <button className="register-btn">
              {/* <HiOutlinePencilSquare fontSize="1.6rem"/> */}
              REGISTER
            </button>
          </a>
        </div>
        {/* <div className="down-arrow">
          <BsArrowDown fontSize="2.5rem" />
        </div> */}
        <div className="progress-bar">
          <div className="progress-value"></div>
          <div className="progress-status">
            <IoMdArrowDropup />
          </div>
        </div>
      </div>
    </section>
  );
};
