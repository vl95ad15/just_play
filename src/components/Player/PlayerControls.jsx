import "./PlayerControls.css";

function PlayerControls(props) {
  return (
    <div className="PlayerControls">
      <div className="PlayerControlsBox">
        <div className="PlayerButtons">
          <div className="ShuffleBtn">
            <i className="fa fa-random" />
          </div>
          <div className="SkipBtn" onClick={() => props.SkipSong(false)}>
            <i className="fa fa-step-backward" />
          </div>
          <div
            className="PlayBtn"
            onClick={() => props.setIsPlaying(!props.isPlaying)}
          >
            {props.isPlaying ? (
              <i className="fa fa-pause-circle fa-2x" />
            ) : (
              <i className="fa fa-play-circle fa-2x" />
            )}
          </div>
          <div className="SkipBtn" onClick={() => props.SkipSong()}>
            <i className="fa fa-step-forward" />
          </div>
          <div className="RepeatBtn">
            <i className="fa fa-repeat" />
          </div>
        </div>
        <div className="SeekSliderContainer">
          <div className="CurrentTime">00:00</div>
          <input
            type="range"
            min="1"
            max="100"
            defaultValue="0"
            className="SeekSlider"
          />
          <div className="TotalDuration">00:00</div>
        </div>
      </div>
      <div className="VolumeSliderContainer">
        <i className="fa fa-volume-down" />
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          className="VolumeSlider"
        />
        <i className="fa fa-volume-up" />
      </div>
    </div>
  );
}

export default PlayerControls;
