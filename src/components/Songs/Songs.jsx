import SongList from './SongList';
import { songsDB } from "../../context/songsDB";

function Songs() {
  return(
    <SongList song={songsDB} />
  )
}

export default Songs;
