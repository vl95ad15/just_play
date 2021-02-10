import {
  SET_CURRENT_SONG,
  TOGGLE_RANDOM,
  TOGGLE_REPEAT,
  TOGGLE_PLAYING,
  IS_LOGGED,
  LOG_OUT,
  MODAL_ACTIVE
} from './types';

export default function Reducer(state, action) {
  switch (action.type) {
    case IS_LOGGED:
      return {
        ...state,
        isLogged: true,
        userName: action.userName
      }
    case LOG_OUT:
      return {
        ...state, isLogged: false
      }
    case MODAL_ACTIVE:
      return {
        ...state, modalActive: true
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