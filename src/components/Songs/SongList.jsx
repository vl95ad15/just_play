import React, { useContext } from "react";
import { Context } from "../../context/context";
import "./SongList.css";

function SongList({ song }) {
  const context = useContext(Context)
  const { SetCurrent } = context;
  return (
    <div className="SongList">
      {song.map((song, index) => (
        <div song={song.id} key={index.toString()}>
          <div className="SongListItem">
            <div className="SongImage">
              <img src={song.image} alt="img" />
              <div
                onClick={() => {
                  SetCurrent(index);
                }}
              >
                <i className={`fa fa-${song.playing ? "pause" : "play"} fa-4x`} />
              </div>
            </div>
            <div className="SongDetails">
              <div className="SongTitle">
                <span>{song.title}</span>
              </div>
              <div className="SongArtist">
                <span>{song.artist}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SongList;
