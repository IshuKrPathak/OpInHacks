import React, { useState } from 'react';
import "./Tracks.css";
import opinco from "../../assets/Hackreboot.png";
import sidestairs2 from "../../assets/sidestairs2.png"
import greenmonster from "../../assets/greenmonster.png"
import staircubes from "../../assets/staircubes.png"
import sidestairs from "../../assets/sidestairs.png"
import img1 from "../../assets/Rectangle.png"
import first from '../../assets/first.png';
import first2 from '../../assets/surprise.png'
import space from "../../assets/space-lines.png"
import pre from "../../assets/pre.png"
import next from "../../assets/nxt.png"

const track0 = require('../../assets/OIP.jpeg')
const track1 = require('../../assets/opincologo.png')
const track2 = require('../../assets/Hackreboot.png')
const track3 = require('../../assets/gdsc.png')
const track4 = require('../../assets/Rectangle.png')

// const handleHover = () => {
//   setImageSrc('new-image.jpg'); 
// };

// const handleLeave = () => {
//   setImageSrc('default-image.jpg'); 
// };
const images = { track0, track1, track2, track3, track4 }

export const Tracks = () => {
  const [imageSrc, setImageSrc] = useState(images.track0)

  const changeImage = (newImageSrc) => {
    setImageSrc(newImageSrc);
  };

  const [audioprogress, setaudioprogress] = useState(60)
  const handlemusicprogressbar = (e) => {
    setaudioprogress(e.target.value)
  }
  return (

    // <section id="Tracks" className="track-conatainer">
    //   <h1 className="track-text">TRACKS</h1>

  


    // <div className="card-section1">
      /*{ <div className="card1">
        <img src={imageSrc} alt="" className="img" />

        <div class="audio-container">
          <audio controls>
            <source src="your-audio-file.mp3" type="audio/mpeg" />
          </audio>
        </div>



      </div> }


    //   {/* <div className="players">
    //   <button className="track1" onClick={() => changeImage(images.track1)}>surprise1</button>
    //   <button className="track2" onClick={() => changeImage(images.track2)}>surprise 2</button>
    //   <button className="track3" onClick={() => changeImage(images.track3)}>surprise 3</button>
    //   <button className="track4" onClick={() => changeImage(images.track4)}>surprise 4</button>
    //    <button className="track3" onClick={() => changeImage(images.track3)}>surprise 1</button>
    //   <button className="track4" onClick={() => changeImage(images.track4)}>surprise 2</button>
    

    // </div> }*/


    //   </div>
    // </section>


    <section className='Theme-container' id='theme'>
      <h1 className="Theme-text">THEMES</h1>
      {/* <img src={staircubes} alt="" className="img1 greenmonster" /> */}

<img src={sidestairs2} alt="" className="img1 sidestairs2" />
{/* <img src={space} alt="" className="img1 staircubes" /> */}
<img src={greenmonster} alt="" className="img1 sidestairs" /> 
      <div className="left-container">
        <button className="track1" onTouchMove={() => changeImage(images.track1)}>surprise1</button>
        <button className="track1" onClick={() => changeImage(images.track2)}>surprise 2</button>
        <button className="track1" onClick={() => changeImage(images.track3)}>surprise 3</button>
        <button className="track1" onClick={() => changeImage(images.track4)}>surprise 4</button>
        <button className="track1" onClick={() => changeImage(images.track3)}>surprise 1</button>
        <button className="track1" onClick={() => changeImage(images.track4)}>surprise 2</button>


      </div>
      <div className='right-container'>

        <div className="music-card">
          <img src={imageSrc} alt="GDSC" className="music-img" />

          <div className="music-card-text">
            <div className="text-music">
              <p className="theme-text-p">Theme name</p>
              <p className="theme-org">Theme</p>
              {/* <div className="musictimerdiv">
                <div className='musiccurrenttime'>00.00</div>
                <div className="musictotlalength">04.00</div>
              </div> */}
              {/* <div className='seekbar'>
              <input type="range" name='musicprogressbar' className=' ' value={audioprogress} onChange={handlemusicprogressbar}/>

              </div> */}


              <div className="musiccontrolers">
                <i className='fa-solid fa-backward'></i>
                <i className='fa-solid fa-circle-play'></i>
                <i className='fa-solid fa-forward'></i>
              </div>
            </div>
          </div>
          <div className='song-slider'>
            <input type="range" value={audioprogress} className='seek-bar' onChange={handlemusicprogressbar
            } />
            <span className='current-time'> 00:00</span>
            <span className='song-duration-time'> 04:00</span>
          </div>

          <div className='controls'>
            <button className='btn backward-btn'><img src={pre} alt="" /></button>
            <button className='play-btn pause'>
              <span></span>
              <span></span>
            </button>
            <button className='btn forward-btn'><img src={next} alt="" /></button>

          </div>
        </div>


      </div>





    </section >
  );
};