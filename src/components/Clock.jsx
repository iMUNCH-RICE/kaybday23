import PlayButton from './PlayButton.jsx';
import TimerTypeSettings from './TimerTypeSettings.jsx';
import './Clock.css'

export default function Clock({  timerMode, currentTime, onClickShowSettings, onClickPauseTimer, onClickStartTimer, timerRunning }) {
  return (
    <div className="clock">
      <PlayButton onClickPauseTimer={onClickPauseTimer} onClickStartTimer={onClickStartTimer} timerRunning={timerRunning}/>
      <TimerTypeSettings timerMode={timerMode} currentTime={currentTime} onClickShowSettings={onClickShowSettings} />
    </div>
  );
}