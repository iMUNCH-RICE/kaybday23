import TimeLeft from './TimeLeft.jsx';
import TypeSettings from './TypeSettings.jsx';
import './TimerTypeSettings.css'


export default function TimerTypeSettings({ timerMode, currentTime, onClickShowSettings }) {
  return (
    <div className="timer-type">
      <TimeLeft currentTime={currentTime} />
      <TypeSettings timerMode={timerMode} onClickShowSettings={onClickShowSettings} />
    </div>
  );
}