import React from 'react'
import './LandingPage.scss'
import Athlete from "../../assets/images/UpSkill-Athlete.jpeg"
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-entry">
    <div className="landing-entry__image-container">
    <img src={Athlete} alt="UpSkill Athelete"/>
    </div>
    <div className="landing-entry__content">
      <h1 className="landing-entry__title">Welcome to UpSkill</h1>
      <Link to="/home">
      <button className="landing-entry__button">Begin
      </button>
      </Link>
    </div>
  </div>
);
};



export default LandingPage