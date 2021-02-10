import React, { useContext } from 'react'
import { Context } from '../../context/context'

function PlayPause({ playing, songId, isCurrentSong, visible }) {
    
  const { dispatch } = useContext(Context)
  
    if (isCurrentSong && playing) {
      return (
        <i
          className="fa fa-pause"
          onClick={() => dispatch({ type: 'PAUSE' })}
        />
      )
    } else {
      return (
        <i
          className="fa fa-play"
          onClick={() => dispatch({ type: 'PLAY', songId })}
        />
      )
    }
  }

export default PlayPause
