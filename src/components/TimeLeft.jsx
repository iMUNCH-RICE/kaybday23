import './TimeLeft.css'


export default function TimeLeft({ currentTime }) {
  return (
    <div className="time-left">
      {currentTime}
    </div>
  );
}