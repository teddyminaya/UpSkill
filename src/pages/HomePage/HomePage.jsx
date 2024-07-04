import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import { useState } from 'react'

const HomePage = () => {

  const [selectedSport, setSelectedSport] = useState(null)
 
  return (
    <>
    <Header />
    <NavBar selectedSport={selectedSport} setSelectedSport={setSelectedSport}/>
    {/* List of Positions */}
    <Footer />
    </>
  )
}

export default HomePage