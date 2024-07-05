import React from 'react'

const PositionCard = ({item}) => {
  
    return (
    <img src={`http://localhost:8000/assets/images/${item.img}`} />
  )
}

export default PositionCard