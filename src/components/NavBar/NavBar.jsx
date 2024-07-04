import React from "react";
import "./NavBar.scss";
import { useState } from "react";

const NavBar = ({selectedSport, setSelectedSport}) => {
  
    console.log(setSelectedSport)
    return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <button onClick={() => setSelectedSport(null)} className={`nav__button ${selectedSport=== null ? "nav__button-active" : "" } nav__button--featured`}>
            Featured
          </button>
        </li>
        <li className="nav__item">
          <button onClick={() => setSelectedSport("baseball")} className={`nav__button ${selectedSport=== "baseball" ? "nav__button-active" : "" } nav__button--baseball`}>
            Baseball
          </button>
        </li>
        <li className="nav__item">
          <button onClick={() => setSelectedSport("basketball")} className={`nav__button ${selectedSport=== "basketball" ? "nav__button-active" : "" } nav__button--basketball`}>
            Basketball
          </button>
        </li>
        <li className="nav__item">
          <button onClick={() => setSelectedSport("football")} className={`nav__button ${selectedSport=== "football" ? "nav__button-active" : "" } nav__button--football`}>
            Football
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
