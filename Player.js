import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

function Player({
  songs,
  audioRef,
  audioTime,
  setAudioTime,
  currentSong,
  isPlaying,
  setIsPlaying,
  setSongs,
  setCurrentSong,
}) {
  const clickHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  
  /* skip btn ...plus do not make any double proks...?*/
  
 

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setAudioTime({ ...audioTime, currentTime: e.target.value });
  };
//   const animation = {
//       transform:`translateX(${audioTime.animationPercent}%)`
//   }
const activeHandler = (nextOne) =>{
    setSongs(
        songs.map((song) => {
          if (song.id === nextOne.id) {
            return {
              ...song,
              active: true,
            };
          } else {
            return {
              ...song,
              active: false,
            };
          }
        })
      );
    }
    const skipHandler = (direction) => {
      let currentIndex = songs.findIndex((index) => index.id === currentSong.id);
      if (direction === "skip-forward") {
         setCurrentSong(songs[(currentIndex + 1) % songs.length]);
         activeHandler((currentIndex + 1) % songs.length);
      } else if (direction === "skip-backward") {
        if (currentIndex > 0) {
           setCurrentSong(songs[(currentIndex - 1) % songs.length]);
           activeHandler((currentIndex - 1) % songs.length);
        } else {
           setCurrentSong(songs[songs.length - 1]);
           activeHandler((currentIndex - 1) % songs.length);
        }
      }
    }
  
  
  return (
    <div className="player">
      <div className="time-control">
        <span>{getTime(audioTime.currentTime)}</span>
        <div style={{background:`linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]})`}} className="track">
          <input
            min={0}
            max={audioTime.duration}
            value={audioTime.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div style={{transform:`translateX(${audioTime.animationPercent}%)`}} className="animate-track"></div>
        </div>
        <span>{getTime(audioTime.duration)}</span>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipHandler("skip-backward")}
          className="skip-back"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={clickHandler}
          className="play"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          
          onClick={() => skipHandler("skip-forward")}
          className="skip-forward"
          icon={faAngleRight}
        />
      </div>
    </div>
  );

  }
export default Player;
