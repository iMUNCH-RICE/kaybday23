import PlayButton from './PlayButton.jsx';
import TimerTypeSettings from './TimerTypeSettings.jsx';
import './Clock.css'

export default function Clock({ currentTime, onClickShowSettings, onClickPauseTimer, onClickStartTimer, timerRunning }) {
  return (
    <div className="clock">
      <PlayButton onClickPauseTimer={onClickPauseTimer} onClickStartTimer={onClickStartTimer} timerRunning={timerRunning}/>
      <TimerTypeSettings currentTime={currentTime} onClickShowSettings={onClickShowSettings} />
    </div>
  );
}