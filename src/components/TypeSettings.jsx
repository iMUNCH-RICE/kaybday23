import './TypeSettings.css'

export default function TypeSettings({ onClickShowSettings }) {
  return (
    <div className="type-settings">
      <span className="timer-type">SESSION</span>
      <button onClick={onClickShowSettings} className="btn-settings">...</button>
    </div>
  );
}