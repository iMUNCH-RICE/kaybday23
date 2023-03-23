import TimeLeft from './TimeLeft.jsx';
import TypeSettings from './TypeSettings.jsx';
import './TimerTypeSettings.css'


export default function TimerTypeSettings() {
  return (
    <div className="timer-type">
      <TimeLeft />
      <TypeSettings />
    </div>
  );
}