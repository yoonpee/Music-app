import React from "react";

function ListSongs({ setSongs, songs, music, setCurrentSong }) {
  const songHandler = () => {
    setCurrentSong(music);
    setSongs(
      songs.map((song) => {
        if (song.id === music.id) {
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
  };

  return (
    <div
      onClick={songHandler}
      className={`list-song ${music.active ? "selected" : ""}`}
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
