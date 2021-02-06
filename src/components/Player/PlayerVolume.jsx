import "./PlayerVolume.css";

function PlayerVolume(props) {
  return (
      <div className="VolumeSliderContainer">
        <i className="fa fa-volume-down" />
        <input
          type="range"
          min="0"
          max="100"
          className="VolumeSlider" onChange={(e) => props.setVolume(e.target.value / 100)}
        />
        <i className="fa fa-volume-up" />
      </div>
  )
}

export default PlayerVolume;
