import React from 'react'
import "./DetailHeader.scss"
import Arrow from '../../assets/icons/left-arrow.svg'
import { Link } from 'react-router-dom'

const DetailHeader = () => {
  return (
    <header className="detail__header">
    <div className="detail__header-search--icon">
    <Link to="/home">
     <img className="back-icon"src={Arrow} alt="click this location to go back to the home page"/> 
    </Link>
    </div>
    <h1 className="detail__header-title">Workout Details</h1>
  </header>
  )
}

export default DetailHeader