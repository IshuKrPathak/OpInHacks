import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.png"
// import car from "../../assets/car.png"
import { FaDiscord } from 'react-icons/fa';

const Footernew = () => {
  function discordlink() {
    window.open("https://discord.gg/KnthBxzApR");
}
function registration() {
  window.open("https://lu.ma/opin-hacks");
}
function sponsor_us() {
  window.open("https://forms.gle/xzP1vVgXWMBpSdHF9");
}
  return (
    <footer id='Footer' class="padding_4x">
    <div class="flex">
      <section class="flex-content padding_1x">
        <img src={logo} alt="Logo" className='logo'/>
        <p className='content-p'>A battle through time.</p>
        <div className=''>
        <button className='btn register' onClick={registration}>REGISTER</button>
        <button className='btn discord' onClick={discordlink}><FaDiscord color='black' size="1rem"/></button>
          <button className='btn sponsor' onClick={sponsor_us}>SPONSOR US</button>
        </div>
      </section>
      <section class="flex-content padding_1x">
        <h3>Site</h3>
        <a href="#Hero">Home</a>
        <a href="#About">About</a>
        <a href="#Organizers">Organisers</a>
        <a href="#Sponsors">Sponsors</a>
        <a href="#Faq">FAQ</a>
      </section>
      <section class="flex-content padding_1x">
        <h3>Socials</h3>
        <a href="https://www.instagram.com/opinhacks/" target='_blank' rel="noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/company/opinhacks/" target='_blank' rel="noreferrer">Linkedin</a>
        <a href="https://twitter.com/opinhacks" target='_blank' rel="noreferrer">Twitter</a>
      </section>
      
    </div>
    <hr className='hr-tag'/>
    <div class="flex">
      <section class="flex-content padding_1x">
        <p>Made with &#10084;</p>
      </section>

    </div>
  </footer>
  )
}

export default Footernew