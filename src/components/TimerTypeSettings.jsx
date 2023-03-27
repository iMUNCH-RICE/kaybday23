import TimeLeft from './TimeLeft.jsx';
import TypeSettings from './TypeSettings.jsx';
import './TimerTypeSettings.css'


export default function TimerTypeSettings({ currentTime, onClickShowSettings }) {
  return (
    <div className="timer-type">
      <TimeLeft currentTime={currentTime} />
      <TypeSettings onClickShowSettings={onClickShowSettings} />
    </div>
  );
}