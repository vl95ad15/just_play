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

export default function Reducer(state, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        
      }
    case IS_LOGGED:
      return {
        ...state,
        isLogged: true,
        userName: action.payload.userName,
      }
    case LOG_OUT:
      return {
        ...state, isLogged: false
      }
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.data,
        playing: true
      }
    case TOGGLE_RANDOM:
      return {
        ...state,
        random: action.data
      }
    case TOGGLE_REPEAT:
      return {
        ...state,
        repeat: action.data
      }
    case TOGGLE_PLAYING:
      return {
        ...state,
        playing: action.data
      }
    default:
      return state
  }
}