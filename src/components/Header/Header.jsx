import React from 'react'
import "./Header.scss"
import Search from '../../assets/icons/icons8-search.svg'


const Header = () => {
  return (
    <header className="header">
      <div className="header__search-icon">
       <img src={Search} alt="click this location to search the page"/> 
      </div>
      <h1 className="header-title">Featured Workouts</h1>
    </header>
  );
};

export default Header