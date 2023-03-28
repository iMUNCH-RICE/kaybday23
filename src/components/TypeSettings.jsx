import './TypeSettings.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

export default function TypeSettings({ timerMode, onClickShowSettings }) {
  const [isRotated, setIsRotated] = useState(false);

  const handleClickShowSettings = () => {
    setIsRotated(!isRotated);
    onClickShowSettings();
  };

  return (
    <div className="type-settings">
      <span className="timer-type" id="timer-label">{timerMode}</span>
      <button onClick={handleClickShowSettings} className={`btn-settings${isRotated ? ' rotate' : ''}`}>
        <FontAwesomeIcon icon={faEllipsisH} />
      </button>
    </div>
  );
}