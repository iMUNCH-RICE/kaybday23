import './BreakLength.css';

export default function BreakLength(props) {
  function handleClickMinus() {
    const newBreakLength = props.breakLength - 1;
    props.onBreakLengthChange(newBreakLength);
  }

  function handleClickPlus() {
    const newBreakLength = props.breakLength + 1;
    props.onBreakLengthChange(newBreakLength);
  }

  return (
    <div className="break-length">
      <div className="time-break-container">
        <button onClick={handleClickMinus} className="minus">-</button>
        <p className="time-break">{props.breakLength}:00</p>
        <button onClick={handleClickPlus} className="plus">+</button>
      </div>
      <p className="break-length-title">BREAK LENGTH</p>
    </div>
  );
}