import React, { useState, useRef, useEffect } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";
import PlayerVolume from "./PlayerVolume"

import "./Player.css";

function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [volume, setVolume] = useState(0.5);
  // const [duration, setDuration] = useState("00:00");
  // const [position, setPosition] = useState(0);


  const format = (n) => {
    return (n - (n %= 60)) / 60 + (9 < n ? ":" : ":0") + ~~n;
  };

  // useEffect(() => {
  //   setVolume();
  // }, [volume]);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }, [isPlaying]);

  // setDuration(audioEl.current.duration);

  const setVol = (q) => {
    audioEl.current.volume = q;
  };

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }
        return temp;
      });
    }
  };

  return (
    <div className="Player">
      <audio
        src={props.songs[props.currentSongIndex].path}
        ref={audioEl}
      ></audio>
      <PlayerDetails song={props.songs[props.currentSongIndex]} />
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
        
        // setPosition={setPosition}
        // duration={duration}
        format={format}
      />
      <PlayerVolume setVolume={setVol} />
    </div>
  );
}

export default Player;
