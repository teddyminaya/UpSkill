import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(prevTime => prevTime + 1), 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startWorkout = () => {
    setIsRunning(true);
  };

  const pauseWorkout = () => {
    setIsRunning(false);
  };

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(time);

  return (
    <div>
      <div className="timer">
        <div className="time-unit">
          <span className="time">{hours.toString().padStart(2, '0')}</span>
          <span className="unit">Hour</span>
        </div>
        <div className="time-unit">
          <span className="time">{minutes.toString().padStart(2, '0')}</span>
          <span className="unit">Minutes</span>
        </div>
        <div className="time-unit">
          <span className="time">{seconds.toString().padStart(2, '0')}</span>
          <span className="unit">Seconds</span>
        </div>
      </div>
      <div className="controls">
        {!isRunning ? (
          <button className="start-button" onClick={startWorkout}>
            Start Workout
          </button>
        ) : (
          <button className="pause-button" onClick={pauseWorkout}>
            Pause Workout
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;