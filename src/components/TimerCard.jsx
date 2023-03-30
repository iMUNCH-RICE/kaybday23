import './TimerCard.css';
import { useState, useEffect } from 'react';

import Collapse from 'react-smooth-collapse';

import Clock from './Clock.jsx';
import TimerMoreSettings from './TimerMoreSettings.jsx';
import zoroSound from '../assets/zoro_01.mp3';

export default function TimerCard() {

  const [sessionLength, setSessionLength] = useState(1500);
  const [breakLength, setBreakLength] = useState(300);
  const [timerMode, setTimerMode] = useState('SESSION');
  const [timerRunning, setTimerRunning] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [currentTime, setCurrentTime] = useState(1500);
  const [audioElement, setAudioElement] = useState(null);

  useEffect(() => {
    let interval = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setCurrentTime((prevTime) => {
          if (prevTime === 0) {
            return switchTimer();
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timerMode, breakLength, sessionLength]);


  const switchTimer = () => {
    setTimerMode((prevMode) => (prevMode === 'SESSION' ? 'BREAK' : 'SESSION'));
    return timerMode === 'SESSION' ? breakLength : sessionLength;
  };

  const handleStartTimer = () => {
    setTimerRunning(true);
  };

  const handlePauseTimer = () => {
    setTimerRunning(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleResetTimer = () => {
    setTimerRunning(false);
    setSessionLength(1500);
    setBreakLength(300);
    setCurrentTime(timerMode === 'SESSION' ? 1500 : 300);
  };

  const handleToggleShowSettings = () => {
    setShowSettings(!showSettings);
  }

  const handleBreakLengthChange = (newBreakLength) => {
    setBreakLength(newBreakLength);
    if (timerMode === 'BREAK') {
      setCurrentTime(newBreakLength);
    }
  };

  const handleSessionLengthChange = (newSessionLength) => {
    setSessionLength(newSessionLength);
    if (timerMode === 'SESSION') {
      setCurrentTime(newSessionLength);
    }
  };

  useEffect(() => {
    if (currentTime === 0 && audioElement) {
      audioElement.volume = 0.25;
      audioElement.play();
    }
  }, [currentTime, audioElement]);

  const handleAudioRef = (element) => {
    setAudioElement(element);
  };

  useEffect(() => {
    document.title = `${timerMode} - ${formatTime(currentTime)}`;
  }, [currentTime, formatTime]);

  return (
    <div className="card">
      <audio ref={handleAudioRef} src={zoroSound} id="beep" />
      <Clock
        currentTime={formatTime(currentTime)}
        timerMode={timerMode}
        onClickShowSettings={handleToggleShowSettings}
        onClickPauseTimer={handlePauseTimer}
        onClickStartTimer={handleStartTimer}
        timerRunning={timerRunning}
      />
      <Collapse expanded={showSettings && !timerRunning}>
        <TimerMoreSettings
          breakLength={breakLength}
          sessionLength={sessionLength}
          onClickReset={handleResetTimer}
          onBreakLengthChange={handleBreakLengthChange}
          onSessionLengthChange={handleSessionLengthChange}
          formatTime={formatTime}
        />
      </Collapse>
    </div>
  );
}
