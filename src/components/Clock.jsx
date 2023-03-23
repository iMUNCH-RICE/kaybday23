import PlayButton from './PlayButton.jsx';
import TimerTypeSettings from './TimerTypeSettings.jsx';
import './Clock.css'

export default function Clock() {
  return (
    <div className="clock layout-row">
      <PlayButton />
      <TimerTypeSettings />
    </div>
  );
}