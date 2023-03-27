import './TimerCard.css';
import { useState, useRef } from 'react';

import Clock from './Clock.jsx';
import TimerMoreSettings from './TimerMoreSettings.jsx';

export default function TimerCard() {
  // state + handler is in this function because its children components both need info from this parent component and from each other

  // const [currentTime, setCurrentTime] = useState(25)
  //   25 * 60 = 1500s
  const [currentTime, setCurrentTime] = useState(1500)
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timerType, setTimerType] = useState("SESSION");
  const [timerRunning, setTimerRunning] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const intervalRef = useRef(null);

  const handleStartTimer = () => {
    console.log("start");
    setTimerRunning(true);
    intervalRef.current = setInterval(() => {
      setCurrentTime((prevTime) => prevTime - 1);
    }, 1000);
  };

  const handlePauseTimer = () => {
    console.log("pause");
    setTimerRunning(false);
    clearInterval(intervalRef.current);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleResetTimer = () => {
    setTimerRunning(false);
    clearInterval(intervalRef.current);
    setCurrentTime(1500); // reset to 25 minutes
  };

  const handleToggleShowSettings = () => {
    setShowSettings(!showSettings);
  }

  const handleBreakLengthChange = (newBreakLength) => {
    setBreakLength(newBreakLength);
    if (timerType == "BREAK") {
      setCurrentTime(newBreakLength);
    }
  };

  const handleSessionLengthChange = (newSessionLength) => {
    setSessionLength(newSessionLength);
    if (timerType == "SESSION") {
      setCurrentTime(newSessionLength);
    }
  };

  return (
    <div className="card">

      <Clock currentTime={formatTime(currentTime)}
        onClickShowSettings={handleToggleShowSettings}
        onClickPauseTimer={handlePauseTimer}
        onClickStartTimer={handleStartTimer}
        timerRunning={timerRunning}
      />
      {showSettings &&
        <TimerMoreSettings
          breakLength={breakLength}
          sessionLength={sessionLength}
          onBreakLengthChange={handleBreakLengthChange}
          onSessionLengthChange={handleSessionLengthChange}
        />}
    </div>
  );
}
