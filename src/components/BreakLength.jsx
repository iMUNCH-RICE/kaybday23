import './BreakLength.css';

export default function BreakLength(props) {
  function formatTime(time) {
    return props.formatTime(time);
  }

  function handleClickMinus() {
    if ((props.breakLength - 30) >= 0) {
      const newBreakLength = props.breakLength - 30;
      props.onBreakLengthChange(newBreakLength);
    }
  }

  function handleClickPlus() {
    if ((props.breakLength + 30) < 3600) {
      const newBreakLength = props.breakLength + 30;
      props.onBreakLengthChange(newBreakLength);
    }
  }

  return (
    <div className="break-length">
      <div className="time-break-container">
        <button onClick={handleClickMinus} className="minus" id="break-decrement">-</button>
        <p className="time-break" id="break-length">{formatTime(props.breakLength)}</p>
        <button onClick={handleClickPlus} className="plus" id="break-increment">+</button>
      </div>
      <p className="break-length-title" id="break-label">BREAK LENGTH</p>
    </div>
  );
}