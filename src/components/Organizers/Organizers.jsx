import React from "react";
import "./Organizers.css";

import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import GDSC from "../../assets/gdsc.png";
import hackreboot from "../../assets/Hackreboot.png";
import opinco from "../../assets/opincologo.png";
import hole2 from "../../assets/hole2.png";
import track2 from "../../assets/track2.png"
import column from "../../assets/column.png"
import sidestairs2 from "../../assets/sidestairs2.png"
import greenmonster from "../../assets/greenmonster.png"
import staircubes from "../../assets/staircubes.png"
import sidestairs from "../../assets/sidestairs.png"

export const Organizers = () => {
  function gdsc_insta() {
    window.open("https://instagram.com/gdscbitd?igshid=YmMyMTA2M2Y=");
  }
  function gdsc_twitter() {
    window.open("https://twitter.com/gdscbitd?t=tRPkbvIxmQdZmlDb66-JvA&s=08");
  }
  function hack_insta() {
    window.open("https://instagram.com/hackrebootbitd?igshid=YmMyMTA2M2Y=");
  }

  function hack_twitter() {
    window.open("https://twitter.com/HackRebootBITD?t=tjJczxvMfF0go2-7xN4iJg&s=08");
  }
  function opinco_insta() {
    window.open("https://www.instagram.com/opincocommunity/");
  }
  function opinco_twitter() {
    window.open("https://twitter.com/opincocommunity");
  }
  return (
    // <div className="entire">
    <section id="Organisers" className="organizers-conatainer">
      <h1 className="organize-text">ORGANISERS</h1>
      {/* <img src={hole2} alt="" className="img1 hole"/> */}
      <img src={greenmonster} alt="" className="img1 greenmonster"/>
      {/* <img src={track2} alt="" className="img1 track"/> */}
      {/* <img src={column} alt="" className="img1 column"/> */}
      <img src={sidestairs2} alt="" className="img1 sidestairs2"/>
      <img src={staircubes} alt="" className="img1 staircubes"/>
      <img src={sidestairs} alt="" className="img1 sidestairs"/>
      {/* <div className="organ-container"> */}
      
      <div className="card-section">
        <div className="card">
          
            <img src={GDSC} alt="GDSC"  className="img" />
        
          <div className="card-text">
            <div className="text">
              <p className="organize-text-p">Organiser</p>
              <p className="org">GDSC BITD</p>
            </div>
            <div className="socials-buttons">
              <button className="insta" onClick={gdsc_insta}>
                <FaInstagram size="1.5rem"  />
              </button>
              <button className="twitter" onClick={gdsc_twitter}>
                <FaTwitter size="1.5rem" />
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          
            <img src={hackreboot} alt="HackClub"  className="img" />
        
          <div className="card-text">
            <div className="text">
              <p className="organize-text-p">Organiser</p>
              <p className="org">HackReboot</p>
            </div>
            <div className="socials-buttons">
              <button className="insta" onClick={hack_insta}>
                <FaInstagram size="1.5rem" />
              </button>
              <button className="twitter" onClick={hack_twitter}>
                <FaTwitter size="1.5rem" />
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          
            <img src={opinco} alt=""  className="img" />
        
          <div className="card-text">
            <div className="text">
              <p className="organize-text-p">Organiser</p>
              <p className="org">OpInCo</p>
            </div>
            <div className="socials-buttons">
              <button className="insta" onClick={opinco_insta}>
                <FaInstagram size="1.5rem" />
              </button>
              <button className="twitter" onClick={opinco_twitter}>
                <FaTwitter size="1.5rem" />
              </button>
            </div>
          </div>
        </div>
       </div>
    </section>
    // </div>
  );
};
