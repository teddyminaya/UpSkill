import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import PositionCard from '../PositionCard/PositionCard'

const PositionList = ({selectedSport}) => {
    const [positions, setPositions]= useState([])
    const filtered = selectedSport ? positions.filter((position) => {
        return selectedSport === position.sport.toLowerCase()
    }) : positions
    console.log(positions)
    useEffect(() => {
        const loadPositions = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/positions`)
                setPositions(response.data)
            } catch (error) {
                console.log('HEY WE GOT A PROBLEM', error)
            }
        }
    loadPositions()
    }, [])
  
    return (
    <>
    {filtered.map((el) => { 
    return <PositionCard  key= {el.id} item={el} />
    })}
    </>
  )
}

export default PositionList