import TrackListItem from './TrackListItem';
import './TrackList.css';


function TrackList({ tracks }) {
  return(
    <div className="TrackList">
      {tracks.map(track => <TrackListItem track={track} />)}
    </div>
  )
}

export default TrackList;
