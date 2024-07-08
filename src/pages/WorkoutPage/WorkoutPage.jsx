import React from 'react';
import './WorkoutPage.scss';
import Footer from '../../components/Footer/Footer';

const WorkoutPage = () => {
  return (
    <>
    <div className="workout-page">
      <div className="workout-image">
        <div className="image-placeholder"></div>
      </div>
      <div className="workout-details">
        <h2 className="workout-title">WORKOUT</h2>
        <div className="workout-stats">
          <div className="stat">
            <span className="stat-label">Duration</span>
            <span className="stat-value">42 min</span>
          </div>
          <div className="stat">
            <span className="stat-label">Exercises</span>
            <span className="stat-value">23 exercises</span>
          </div>
          <div className="stat">
            <span className="stat-label">Rest</span>
            <span className="stat-value">0 sec</span>
          </div>
        </div>
        <div className="timer">
          <div className="time-unit">
            <span className="time">00</span>
            <span className="unit">Hour</span>
          </div>
          <div className="time-unit">
            <span className="time">02</span>
            <span className="unit">Minutes</span>
          </div>
          <div className="time-unit">
            <span className="time">30</span>
            <span className="unit">Seconds</span>
          </div>
        </div>
        <button className="start-button">Start Workout</button>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default WorkoutPage