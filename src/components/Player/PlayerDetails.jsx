import React from 'react'

import './PlayerDetails.css';

function PlayerDetails(props) {
  return (
    <div className="PlayerDetails">
      <div className="DetailsImg">
        <img src={props.song.image} alt="img" />
      </div>
      <div className="DetailsInfo">
        <span className="DetailsTitle">{props.song.title}</span>
        <span className="DetailsArtist">{props.song.artist}</span>
      </div>
    </div>
  )
}

export default PlayerDetails;
