import './SessionLength.css';

export default function SessionLength() {
  return (
    <div className="session-length">
      <div className="time-session-container">
        <button className="minus">-</button>
        <p className="time-session">25:00</p>
        <button className="plus">+</button>
      </div>
      <p className="session-length-title">SESSION LENGTH</p>
    </div>
  );
}