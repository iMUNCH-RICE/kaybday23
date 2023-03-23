import PlayButton from './PlayButton.jsx';
import TimerType from './TimerType.jsx';

export default function Clock() {
  return (
    <div className="clock">
      <PlayButton />
      <TimerType />
    </div>
  );
}