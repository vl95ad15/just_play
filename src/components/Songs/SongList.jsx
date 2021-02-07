import React, { useContext } from 'react';
import { Context } from '../../context/context';
// import SongListItem from './SongListItem';
import './SongList.css';


function SongList({ song }) {
  
  const { SetCurrent, playing } = useContext(Context) 
  return(
    <div className="SongList">
      {song.map((song, index) => <div song={song} key={index.toString()} >
        <div className="SongListItem"  >
      <div className="SongImage"><img src={song.image} alt="img" /></div>
      <div className="SongDetails">
      <div className="SongName"><span>{song.title}</span></div>
      <div className="SongArtist"><span>{song.artist}</span></div>
      </div>
      <button onClick={() => { SetCurrent(index); }}><span className={!playing ? '' : 'hide'}><i className="fas fa-play"></i></span>
          <span className={!playing ? 'hide' : ''}><i className="fas fa-pause"></i></span></button>
      </div>
      </div>)}
    </div>
  )
}

export default SongList;

// song={song} key={index.toString()}