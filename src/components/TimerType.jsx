import TimeLeft from './TimeLeft.jsx';
import TypeSettings from './TypeSettings.jsx';

export default function TimerType() {
  return (
    <div className="timer-type">
      <TimeLeft />
      <TypeSettings />
    </div>
  );
}