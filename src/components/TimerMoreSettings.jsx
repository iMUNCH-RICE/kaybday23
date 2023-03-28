import ResetButton from './ResetButton.jsx';
import BreakLength from './BreakLength.jsx';
import SessionLength from './SessionLength.jsx';
import './TimerMoreSettings.css';


export default function TimerMoreSettings(props) {
  return (
    <div className="timer-more-settings">
      <ResetButton onClickReset={props.onClickReset}/>
      <BreakLength breakLength={props.breakLength} onBreakLengthChange={props.onBreakLengthChange} formatTime={props.formatTime} />
      <SessionLength sessionLength={props.sessionLength} onSessionLengthChange={props.onSessionLengthChange} formatTime={props.formatTime} />
    </div>
  );
}