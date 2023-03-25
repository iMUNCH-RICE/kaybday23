import ResetButton from './ResetButton.jsx';
import BreakLength from './BreakLength.jsx';
import SessionLength from './SessionLength.jsx';


export default function TimerMoreSettings() {
  return (
    <div className="timer-more-settings">
      <ResetButton />
      <BreakLength />
      <SessionLength />
    </div>
  );
}