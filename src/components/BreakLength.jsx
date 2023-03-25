import './BreakLength.css';

export default function BreakLength() {
  return (
    <div className="break-length">
      <div className="time-break-container">
        <button className="minus">-</button>
        <p className="time-break">5:00</p>
        <button className="plus">+</button>
      </div>
      <p className="break-length-title">BREAK LENGTH</p>
    </div>
  );
}