import React from "react";

function ListSongs({ setSongs, songs, music, setCurrentSong}) {
  
const songActive = () => {
    songs.map((song)=>{
       if(song.id === music.id ){
        console.log("nani");
       }
       
    })
    console.log(music);
}

  return (
    <div
      onClick={songActive}
      className="list-song"
    >
      <img alt={music.name} src={music.cover}></img>
      <div className="description">
        <h3>{music.name}</h3>
        <h4>{music.artist}</h4>
      </div>
    </div>
  );
}

export default ListSongs;
