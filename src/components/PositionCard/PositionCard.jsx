import React from 'react'
import "./PositionCard.scss";
import { Link } from 'react-router-dom';

const PositionCard = ({item}) => {
  
    return (
      <>
        <div className="card">
        <div className="card__image-container">
          <img src={`http://localhost:8000/assets/images/${item.img}`} alt="The Athelte at their respective postion" className="card__image" />
        </div>
        <div className="card__content">
          <h2 className="card__title">{item.position}</h2>
          <p className="card__duration">{item.duration}</p>
        </div>
        <div className='card__button-container'>
        <Link to = {`/workoutdetails/${item.id}`}><button className="card__button">Start Now</button> </Link>
        </div>
      </div>
    </>
  )
}

export default PositionCard