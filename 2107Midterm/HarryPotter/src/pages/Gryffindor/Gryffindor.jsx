import React, { useEffect, useState } from 'react'
import GryffindorContext from '../../context/GryffindorContext'
import ProfileList from '../../components/GryffindorProfile/GryffProfileList'

export default function Gryffindor() {

  const [gryffindorData, setGryffindorData] = useState([]);

  useEffect(() => {
    getGryffindorHouse();
  }, [])

  const getGryffindorHouse = async () => {
    const gryffHouseData = await fetch(`https://hp-api.onrender.com/api/characters/house/gryffindor`);
    const gryffHouseJSONData = await gryffHouseData.json();
    //console.log(gryffHouseJSONData);
    setGryffindorData(gryffHouseJSONData);

  }

  return (
    // <div>Gryffindor</div>
    <GryffindorContext.Provider value={gryffindorData}>
      <ProfileList />
    </GryffindorContext.Provider>
  )
}
