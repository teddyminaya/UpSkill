import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import { useState } from 'react'
import PositionList from '../../components/PositionList/PositionList'

const HomePage = () => {

  const [selectedSport, setSelectedSport] = useState(null)
 
  return (
    <>
    <Header />
    <NavBar selectedSport={selectedSport} setSelectedSport={setSelectedSport}/>
    <PositionList selectedSport={selectedSport} />
    <Footer />
    </>
  )
}

export default HomePage