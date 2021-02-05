import './SongListItem.css';

function SongListItem( {song} ) {
  return(
    <div className="SongListItem" key={song.songId}>
      <div className="SongImage"><img src={song.image} alt="img" /></div>
      <div className="SongDetails">
        <div className="SongName"><span>{song.title}</span></div>
        <div className="SongArtist"><span>{song.artist}</span></div>
      </div>
    </div>
  )
}

export default SongListItem;
