import './PlayButton.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

export default function PlayButton({ onClickPauseTimer, onClickStartTimer, timerRunning }) {
  return (
    <div className="play-button-container">
      {timerRunning ?
        <button className="pause-button" onClick={onClickPauseTimer}>
          <FontAwesomeIcon icon={faPause} size="3x" className="pause-icon"/>
        </button> :
        <button className="play-button" onClick={onClickStartTimer}>
          <FontAwesomeIcon icon={faPlay} size="3x" className="play-icon" />
        </button>
      }
    </div>
  );
}