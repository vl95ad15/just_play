import SongList from './SongList';
import { songsDB } from './songsDB';

function Songs() {
  return(
    <SongList song={songsDB}/>
  )
}

export default Songs;
