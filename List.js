import React from 'react'
import ListSongs from './ListSongs'

function List( {listState, setSongs, songs,setCurrentSong ,isPlaying} ) {
    return (
        <div className={`list ${listState ? 'list-active' : ""}`}>
            <h2>Music List</h2>
            <div className="list-songs">
                {songs.map(music =>
                    <ListSongs setSongs={setSongs} isPlaying={isPlaying}  id={music.id} key={music.id} songs={songs} setCurrentSong={setCurrentSong} music={music} />
                     )}
                
            </div>
        </div>
    )
}

export default List
