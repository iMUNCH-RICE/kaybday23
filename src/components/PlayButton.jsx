import './PlayButton.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function PlayButton() {
  return (
    <div className="play-button-container">
      <button className="play-button">
        <FontAwesomeIcon icon={faPlay} size="3x" className="play-icon" />
      </button>
    </div>
  );
}
