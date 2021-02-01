import './TrackListItem.css';

function TrackListItem({track}) {
  return(
    <div className="TrackListItem" key={track.trackId}>
      <div className="TrackName">{track.name}</div>
      <div className="TrackArtist">{track.artist}</div>
      <div className="TrackImage">{track.image}</div>
    </div>
  )
}

export default TrackListItem;
