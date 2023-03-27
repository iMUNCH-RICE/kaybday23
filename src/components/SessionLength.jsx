import './SessionLength.css';

export default function SessionLength(props) {
  function handleClickMinus() {
    const newSessionLength = props.sessionLength - 1;
    props.onSessionLengthChange(newSessionLength);
  }

  function handleClickPlus() {
    const newSessionLength = props.sessionLength + 1;
    props.onSessionLengthChange(newSessionLength);
  }

  return (
    <div className="session-length">
      <div className="time-session-container">
        <button onClick={handleClickMinus} className="minus">-</button>
        <p className="time-session">{props.sessionLength}:00</p>
        <button onClick={handleClickPlus} className="plus">+</button>
      </div>
      <p className="session-length-title">SESSION LENGTH</p>
    </div>
  );
}