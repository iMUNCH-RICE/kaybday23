import './TimeLeft.css'


export default function TimeLeft({ currentTime }) {
  return (
    <div className="time-left" id="time-left">
      {currentTime}
    </div>
  );
}