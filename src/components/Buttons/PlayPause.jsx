import React, { useContext } from 'react'
import { Context } from '../../context/context'

function PlayPause({ playing, songId, isCurrentSong, visible }) {
    
  const { dispatch } = useContext(Context)
    const style = { visibility: visible ? 'visible' : 'hidden' }
  
    if (isCurrentSong && playing) {
      return (
        <i
          className="fa fa-pause"
          onClick={() => dispatch({ type: 'PAUSE' })}
          style={style}
        />
      )
    } else {
      return (
        <i
          className="fa fa-play"
          onClick={() => dispatch({ type: 'PLAY', songId })}
          style={style}
        />
      )
    }
  }

export default PlayPause
