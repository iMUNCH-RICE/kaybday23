import './TypeSettings.css'

export default function TypeSettings({ timerMode, onClickShowSettings }) {
  return (
    <div className="type-settings">
      <span className="timer-type" id="timer-label">{timerMode}</span>
      <button onClick={onClickShowSettings} className="btn-settings">...</button>
    </div>
  );
}