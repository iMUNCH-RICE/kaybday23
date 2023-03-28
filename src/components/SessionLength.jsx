import './SessionLength.css';

export default function SessionLength(props) {
  function formatTime(time) {
    return props.formatTime(time);
  }

  function handleClickMinus() {
    if ((props.sessionLength - 15) >= 0) {
      const newSessionLength = props.sessionLength - 15;
      props.onSessionLengthChange(newSessionLength);
    }
  }

  function handleClickPlus() {
    if ((props.sessionLength + 15) < 3600) {
      const newSessionLength = props.sessionLength + 15;
      props.onSessionLengthChange(newSessionLength);
    }
  }

  return (
    <div className="session-length">
      <div className="time-session-container">
        <button onClick={handleClickMinus} className="minus" id="session-decrement">-</button>
        <p className="time-session" id="session-length">{formatTime(props.sessionLength)}</p>
        <button onClick={handleClickPlus} className="plus" id="session-increment">+</button>
      </div>
      <p className="session-length-title" id="session-label">SESSION LENGTH</p>
    </div>
  );
}