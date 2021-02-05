import SongListItem from './SongListItem';
import './SongList.css';


function SongList({ song }) {
  return(
    <div className="SongList">
      {song.map((song, index) => <SongListItem song={song} key={index.toString()}/>)}
    </div>
  )
}

export default SongList;
