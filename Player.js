import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

function Player( {audioRef, audioTime,setAudioTime,currentSong, isPlaying, setIsPlaying} ) {
   
   const clickHandler = () =>{
      if(!isPlaying){
          audioRef.current.play()
          setIsPlaying(true)
      }else{
          audioRef.current.pause()
          setIsPlaying(false)
      }
   }
  
   const getTime = (time) =>{
       return (
           Math.floor( time/ 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2) 
       )
   }

   const dragHandler = (e) => {
       audioRef.current.currentTime = e.target.value
       setAudioTime({...audioTime, currentTime:e.target.value});
   }
  
   
  return (
    <div className="player">
      <div className="time-control">
        <span>{getTime(audioTime.currentTime)}</span>
        <input min={0} max={audioTime.duration} value={audioTime.currentTime} onChange={dragHandler} type="range" />
        <span>{getTime(audioTime.duration)}</span>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} />
        <FontAwesomeIcon onClick={clickHandler} className="play" icon={isPlaying ? faPause : faPlay} />
        <FontAwesomeIcon className="skip-forward" icon={ faAngleRight} />
      </div>
     
      
      
    </div>
  );
}

export default Player;
