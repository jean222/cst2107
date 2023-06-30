import React, { useEffect } from 'react'
import GryffindorContext from '../../context/GryffindorContext'
import ProfileList from '../../components/ProfileList'

export default function Gryffindor() {

  useEffect(() => {
    getGryffindorHouse();
  }, [])

  const getGryffindorHouse = async () => {
    const gryffHouseData = await fetch(`https://hp-api.onrender.com/api/characters/house/gryffindor`);
    const gryffHouseJSONData = await gryffHouseData.json();
    console.log(gryffHouseJSONData);

  }

  return (
    // <div>Gryffindor</div>
    <GryffindorContext.Provider>
      <ProfileList />
    </GryffindorContext.Provider>
  )
}
