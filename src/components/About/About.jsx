import React from "react";
import "../About/About.css";
import Pillar from "../../assets/pillar.png";
import Pillarmed from "../../assets/pillar-medium.png";
import Pillarsmall from "../../assets/pillar-small.png";
import Pillarlarge from "../../assets/pillar-large.png";

export const About = () => {
  return (
    <section id="About" className="about-section">
      <img className="col3" src={Pillarmed} />
      <img className="col2" src={Pillarsmall} />
      <img className="col1" src={Pillarmed} />
      <img className="col8" src={Pillar} />
      <img className="col6" src={Pillar} />
      <img className="col4" src={Pillarmed} />
      <img className="col" src={Pillar} />
      <div style={{ width: "100%" }} className="about-content">
        <h1 className="about">About Us</h1>
        <p className="para">
          Whether you're a seasoned developer or just starting out, OpInHacks is
          the perfect platform to challenge yourself, develop new skills, and
          network with like-minded individuals. OpInHacks will be a thrilling
          and dynamic OFFLINE hackathon event designed to bring together coders
          from all backgrounds and levels of expertise. With a focus on
          fostering a competitive and inclusive environment, this 36-hour
          hackathon will feature multiple tracks, including both tech and
          non-tech, to cater to a diverse range of interests. With an emphasis
          on learning and growth, OpInHacks is not just about winning, but about
          the journey of becoming a better developer.
        </p>
      </div>
    </section>
  );
};
