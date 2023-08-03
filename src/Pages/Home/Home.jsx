import React, { useEffect } from "react";
import { About } from "../../components/About/About";
import { Hero } from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import "../Home/Home.css";
import Footernew from "../../components/Footer/Footer";
import { Sponsors } from "../../components/Sponsors/Sponsors";
import { Faq } from "../../components/Faq/Faq";
import { Organizers } from "../../components/Organizers/Organizers";
import { Tracks } from "../../components/Tracks/Tracks";
export const Home = () => {
  
  const handleScroll = () => {
    const homepage = document.getElementById("Homepage")
    const navbar = document.getElementById("Navbar")
    
    if(homepage.scrollTop >= 80){
      navbar.classList.add("active")
    }else{
      navbar.classList.remove("active")
    }
    
  }
  return (
    <div id="Homepage" className="homepage-container" onScroll={handleScroll}>
      <Navbar />
      <Hero />
      <About />
      <Organizers />
      <Sponsors />
      <Tracks/>
      <Faq />
      <Footernew />
    </div>
  );
};
