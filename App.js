import React, { useRef,useState } from "react";
import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import List from "./components/List";
import data from "./util";
import Nav from './components/Nav';

function App( {skipHandler} ) {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [listState, setListState] = useState(false);

  const audioRef = useRef(null);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration|| 0;
    const mathCurrent = Math.round(current);
    const mathDuration = Math.round(duration);
    const mathSum = Math.round((mathCurrent / mathDuration) * 100);
    setAudioTime({ ...audioTime, currentTime: current, duration, animationPercent:mathSum });
  };
  const [audioTime, setAudioTime] = useState({
    currentTime: 0,
    duration: 0,
    animationPercent:0,
  });
  const audioHandler =() =>{
    if(isPlaying){
      audioRef.current.play()}
  }

  
    
 
  return (
    <div className={`App ${listState ? "library-active" : ""}`}>
      <Nav listState={listState} setListState={setListState}/>
      <Song currentSong={currentSong} />
      <Player
        listState={listState}
        setSongs={setSongs}
        songs={songs}
        audioTime={audioTime}
        setAudioTime={setAudioTime}
        audioRef={audioRef}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setCurrentSong={setCurrentSong}
      />
      <List
        listState={listState}
        setSongs={setSongs}
        isPlaying={isPlaying}
        audioRef={audioRef}
        currentSong={currentSong}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
       <audio
        onEnded={() => skipHandler("skip-forward")}
        onLoadedData={audioHandler}
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
      
    </div>
  );
  } 

export default App;
