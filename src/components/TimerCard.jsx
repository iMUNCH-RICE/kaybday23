import Clock from './Clock.jsx';
import TimerMoreSettings from './TimerMoreSettings.jsx';

export default function TimerCard() {
  return (
    <div className="card">
      <Clock />
      <TimerMoreSettings />
    </div>
  );
}
