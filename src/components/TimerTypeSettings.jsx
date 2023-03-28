import TimeLeft from './TimeLeft.jsx';
import TypeSettings from './TypeSettings.jsx';
import './TimerTypeSettings.css'


export default function TimerTypeSettings({ timerRunning, timerMode, currentTime, onClickShowSettings }) {
  return (
    <div className="timer-type">
      <TimeLeft currentTime={currentTime} />
      <TypeSettings timerMode={timerMode} onClickShowSettings={onClickShowSettings} timerRunning={timerRunning} />
    </div>
  );
}