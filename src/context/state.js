import React, { useReducer } from 'react';
import { Context } from './context';
import Reducer from './reducer';
import { songsDB } from './songsDB';

import {
  SET_CURRENT_SONG,
  TOGGLE_RANDOM,
  TOGGLE_REPEAT,
  TOGGLE_PLAYING,
  IS_LOGGED,
  LOG_OUT,
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from './types';

const State = ({children}) => {
  const initialState = {
    userName: "",
    modalActive: false,
    isLogged: false,   /// !!!
    currentSong: 0,
    playing: false,
    songs: songsDB,
    repeat: false,
    random: false,
    audio: null
  }

  const [state, dispatch] = useReducer(Reducer, initialState);

  const setIsLogged = (userName) => dispatch({ type: IS_LOGGED, payload: { userName } })
  const logOut = () => dispatch({ type: LOG_OUT })


  // Set playing state
  const togglePlaying = () => dispatch({ type: TOGGLE_PLAYING, data: state.playing ? false : true })
  // Set current song
  const SetCurrent = id => dispatch({ type: SET_CURRENT_SONG, data: id })

  // Prev song
  const prevSong = () => {
    if (state.currentSong === 0) {
      SetCurrent(state.songs.length - 1)
    } else {
      SetCurrent(state.currentSong - 1)
    }
  }
  // Next song
  const nextSong = () => {
    if (state.currentSong === state.songs.length - 1) {
      SetCurrent(0)
    } else {
      SetCurrent(state.currentSong + 1)
    }
  }

  // Repeat and Random
  const toggleRepeat = id => dispatch({ type: TOGGLE_REPEAT, data: state.repeat ? false : true })
  const toggleRandom = id => dispatch({ type: TOGGLE_RANDOM, data: state.random ? false : true })


  // End of Song
  const handleEnd = () => {
    // Check for random and repeat options
    if (state.random) {
      return dispatch({ type: SET_CURRENT_SONG, data: ~~(Math.random() * state.songs.length) })
    } else {
      if (state.repeat) {
        nextSong()
      } else if ((state.currentSong === state.songs.length - 1)) {
        return
      } else {
        nextSong();
      }
    }
  }


  return <Context.Provider
    value={{
      modalActive: state.modalActive,
      isLogged: state.isLogged,
      userName: state.userName,
      currentSong: state.currentSong,
      songs: state.songs,
      repeat: state.repeat,
      random: state.random,
      playing: state.playing,
      audio: state.audio,
      setIsLogged,
      logOut,
      nextSong,
      prevSong,
      SetCurrent,
      toggleRandom,
      toggleRepeat,
      togglePlaying,
      handleEnd
    }}>

    {children}

  </Context.Provider>
}

export default State;