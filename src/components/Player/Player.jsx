/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef, useContext } from "react";
import { Context } from "../../context/context";

import "./Player.css";

function Player() {
  // Global State
  const {
    currentSong,
    songs,
    nextSong,
    prevSong,
    repeat,
    random,
    playing,
    toggleRandom,
    toggleRepeat,
    togglePlaying,
    handleEnd,
  } = useContext(Context);

  const audio = useRef("audio_tag");

  // self State
  const [statevolum, setStateVolum] = useState(0.3);
  const [dur, setDur] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (10 < s ? ":" : ":0") + ~~s;
  };

  const toggleAudio = () =>
    audio.current.paused ? audio.current.play() : audio.current.pause();

  const handleVolume = (q) => {
    setStateVolum(q);
    audio.current.volume = q;
  };

  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute;
  };

  useEffect(() => {
    audio.current.volume = statevolum;
    if (playing) {
      toggleAudio();
    }
  }, [currentSong]);

  return (
    <div className="Player">
      <audio
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onCanPlay={(e) => setDur(e.target.duration)}
        onEnded={handleEnd}
        ref={audio}
        type="audio/mpeg"
        preload="true"
        src={songs[currentSong].path}
      />
      <div className="PlayerDetails">
        <div className="DetailsImg">
          <img src={songs[currentSong].image} alt="img" />
        </div>
        <div className="DetailsInfo">
          <span className="DetailsTitle">{songs[currentSong].title}</span>
          <span className="DetailsArtist">{songs[currentSong].artist}</span>
        </div>
        <div className="LikeButton">
          <i className="fa fa-heart-o" aria-hidden="true" />
        </div>
      </div>
      <div className="ControlsWrapper">
        <div className="PlayerButtons">
        <div
          onClick={toggleRandom}
          className={"random " + (random ? "active" : "")}
        >
          <i className="fas fa-random"></i>
        </div>
          <div className="PreviousSongButton" onClick={prevSong}>
            <i className="fas fa-step-backward"></i>
          </div>
          <div
            className="PlayButton"
            onClick={() => {
              togglePlaying();
              toggleAudio();
            }}
          ><i className={`fa fa-${playing ? 'pause' : 'play'} fa-2x`} />
          </div>
          <div className="NextSongButton" onClick={nextSong}>
            <i className="fas fa-step-forward"></i>
          </div>
          <div
          onClick={toggleRepeat}
          className={"repeat " + (repeat ? "active" : "")}
        >
          <i className="fas fa-redo-alt"></i>
        </div>
        </div>
        <div className="ProgressBarWrapper">
          <div className="CurrentTime">{fmtMSS(currentTime)}</div>
          <input
            onChange={handleProgress}
            value={dur ? (currentTime * 100) / dur : 0}
            type="range"
            name="progresBar"
            className="ProgressBar"
          />
          <div className="Duration">{fmtMSS(dur)}</div>
        </div>
      </div>
      <div className="VolumeSlider">
          <i className="fas fa-volume-down"></i>
        <input
          value={Math.round(statevolum * 100)}
          type="range"
          name="volBar"
          id="volBar"
          onChange={(e) => handleVolume(e.target.value / 100)}
        />
      </div>
    </div>
  );
}

export default Player;
