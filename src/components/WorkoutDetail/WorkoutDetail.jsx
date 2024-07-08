import React, { useEffect, useState } from "react";
import "./WorkoutDetail.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

const WorkoutDetail = () => {

    const {positionid} = useParams()
    const [workout, setWorkout] = useState(null)
    console.log(workout)
    useEffect(() => {
        const loadWorkouts = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/workouts/${positionid}`)
                console.log(response.data)
                setWorkout(response.data)
            } catch (error) {
                console.log('HEY WE GOT A PROBLEM', error)
            }
        }
    loadWorkouts()
    }, [])

    return (
    <div className="training">
    {workout ? (
        <>
        
    
      <h2 className="training__title">Strength Training</h2>

      <p className="training__description">
        {workout.description}
      </p>
    
      <div className="training__image-container">
            <div className="training__image-grid">
              <div className="training__image-item">
                <img
                  src={`http://localhost:8000/assets/images/${workout.img}.jpg`}
                  alt="Workout image"
                  className="training__workout-image"
                />
              </div>
            </div>
          </div>

      <div className="training__muscle-groups">
        <h2 className="training__subtitle">Muscles Worked</h2>
        <div className="training__muscle-grid">
            {workout.muscles.map((el) => {
                return <div className="training__muscle-item">
                <img
                  src={`http://localhost:8000/assets/images/${el}.png`}
                  alt={el}
                  className="training__muscle-image"
                />
                <span className="training__muscle-name">{el}</span>
              </div>
            })}
        </div>
      </div>

      <div className="training__benefits">
        <h2 className="training__subtitle">Best Suited For</h2>
        <div className="training__benefit-grid">
         {workout.img_grid.map((el) => {
            return <img 
            src={`http://localhost:8000/assets/images/${el}.png`}
            alt={el}
            className="training__benefit-grid--image"
            />
         })}
        </div>
      </div>

      

      <button className="training__start-button">Start Workout</button>
      </>
    ): <p>LOADING WORKOUT!!!</p>}
    </div>
  );
};

export default WorkoutDetail;
