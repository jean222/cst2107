import React, { useEffect } from 'react'
import HufflepuffContext from '../../context/HufflepuffContext'
import ProfileList from '../../components/ProfileList'

export default function Hufflepuff() {

  useEffect(() => {
    getHufflepuffHouse();
  }, [])

  const getHufflepuffHouse = async () => {
    const huffHouseData = await fetch(`https://hp-api.onrender.com/api/characters/house/hufflepuff`);
    const huffHouseJSONData = await huffHouseData.json();
    console.log(huffHouseJSONData)
  }

  return (
    // <div>Hufflepuff</div>
    <HufflepuffContext.Provider>
      <ProfileList />
    </HufflepuffContext.Provider>
  )
}
