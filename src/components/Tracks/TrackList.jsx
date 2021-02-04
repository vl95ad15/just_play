import TrackListItem from './TrackListItem';
import './TrackList.css';


function TrackList({ tracks }) {
  return(
    <div className="TrackList">
      {tracks.map((track, index) => <TrackListItem track={track} key={index.toString()}/>)}
    </div>
  )
}

export default TrackList;
