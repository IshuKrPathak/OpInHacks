import React, { useState, useEffect,useCallback } from 'react';
import "./Tracks.css";
// import opinco from "../../assets/Hackreboot.png";
import sidestairs2 from "../../assets/sidestairs2.png"
import greenmonster from "../../assets/greenmonster.png"
// import staircubes from "../../assets/staircubes.png"
// import sidestairs from "../../assets/sidestairs.png"
// import img1 from "../../assets/Rectangle.png"
// import first from '../../assets/first.png';
// import first2 from '../../assets/surprise.png'
// import space from "../../assets/space-lines.png"
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
const trackNames = ['Surprise 1','Surprise 2','Surprise 3','Surprise 4','Surprise 5']


export const Tracks = () => {
  const [imageSrc, setImageSrc] = useState(images.track0)
  const [trackNum, setTrackNum] = useState(0)
  const [isplaying, setIsPlaying] = useState(true)
  const [currentTime, setCurrentTime] = useState(0.0)
  const totalTime = 30

  const [audioProgress, setAudioProgress] = useState(0)

  const handlemusicprogressbar = (e) => {
    setAudioProgress(Number(e.target.value))
  }
  const changeImage = (newImageSrc) => {
    setImageSrc(newImageSrc);
  };

  const changeTrackStyle = useCallback(()=>{
    const tracks = Array.from(document.getElementsByClassName('track'));
    tracks.forEach((track)=>{
      if(track.classList.contains(`track${trackNum}`)){
        track.classList.add('track-selected');
      }
      else{
        track.classList.remove('track-selected')
      }
    })
  },[trackNum])

  const playPrevTrack = (e)=> {
    e.preventDefault()
    if(audioProgress>20){
      setAudioProgress((prev)=> prev-(prev%10)-20)
    }else{
      setAudioProgress(0)
    }
  }

  const playNextTrack = (e)=> {
    e.preventDefault()
    playNext()
  }

  const playNext = ()=>{
    if(audioProgress<80){
      setAudioProgress((prev)=> prev-(prev%10)+21)
    }else{
      setAudioProgress(100)
    }
  }

  const playTracks = (e)=>{
    setIsPlaying(prev=> !prev)
    e.target.classList.toggle('pause')
  }

  const formatTime = (seconds)=>{
    seconds= Math.round(seconds)
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  useEffect(()=>{
    setImageSrc(images[`track${trackNum}`])
    changeTrackStyle();

    // Slider postion and track number relation
    if(audioProgress <= 100 && audioProgress > 80){
      setTrackNum(4)
    }else if(audioProgress <= 80 && audioProgress > 60){
      setTrackNum(3)
    }else if(audioProgress <= 60 && audioProgress > 40){
      setTrackNum(2)
    }else if(audioProgress <= 40 && audioProgress > 20){
      setTrackNum(1)
    }else{
      setTrackNum(0)
    }

    if(audioProgress<=100){
      setCurrentTime(audioProgress*0.3)
    }

    // Play tracks
    let intervalIdBar;

    // Function that runs every 0.3 seconds
    const playAudioBar = () => {
      if(audioProgress<100){
        setAudioProgress((prev)=> prev+1);     
      }else{
        setAudioProgress(0)
      }
      setImageSrc(images[`track${trackNum}`])
    };



    if (isplaying) {
      // Start the interval when isRunning is true
      intervalIdBar = setInterval(playAudioBar, 300);
    } else {
      // Clear the interval when isRunning is false
      clearInterval(intervalIdBar);

    }

    // Cleanup function to clear the interval when the component unmounts or isRunning changes
    return () => clearInterval(intervalIdBar);
  },[trackNum,changeTrackStyle,isplaying,audioProgress])


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
      <div className="track-row">
        <div className="left-container">
          <button className="track track0" onClick={(e) => {
            changeImage(images.track0);
            setTrackNum(0)
            setAudioProgress(0)
            changeTrackStyle();
            }}>
              {trackNames[0]}
          </button>
          <button className="track track1" onClick={(e) => {
            changeImage(images.track2);
            setTrackNum(1)
            setAudioProgress(21)
            changeTrackStyle();
            }}>
              {trackNames[1]}
          </button>
          <button className="track track2" onClick={(e) => {
            changeImage(images.track3);
            changeTrackStyle();
            setTrackNum(2)
            setAudioProgress(41)

            }}>
              {trackNames[2]}
          </button>
          <button className="track track3" onClick={(e) => {
            changeImage(images.track4);
            changeTrackStyle();
            setTrackNum(3)
            setAudioProgress(61)
            }}>
              {trackNames[3]}
          </button>
          <button className="track track4" onClick={(e) => {
            changeImage(images.track2);
            changeTrackStyle();
            setTrackNum(4)
            setAudioProgress(81)
            }}>
              {trackNames[4]}
          </button>
            
        </div>


        <div className='right-container' style={{backgroundImage: `url(${imageSrc})`,}}>
          <div className="music-card">
            <img src={imageSrc} alt="GDSC" className="music-img" />
            <div className="music-card-text">
              <div className="text-music">
                <p className="theme-text-p">{trackNames[trackNum]}</p>
                <p className="theme-org">{trackNames[trackNum]}</p>

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
              <input type="range" value={audioProgress} className='seek-bar' onChange={handlemusicprogressbar} />
              <span className='current-time'>{formatTime(currentTime)}</span>
              <span className='song-duration-time'>{formatTime(totalTime)}</span>
            </div>

            <div className='controls'>
              <button className='btn-control backward-btn' onClick={playPrevTrack}><img src={pre} alt="" /></button>

              <button className='play-btn pause' onClick={playTracks}>
                {/* <span></span>
                <span></span> */}
              </button>


              <button className='btn-control forward-btn' onClick={playNextTrack}><img src={next} alt="" /></button>

            </div>
          </div>
        </div>
      </div>






    </section >
  );
};
