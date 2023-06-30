import React, { useEffect, useState } from 'react'
import GryffindorContext from '../../context/GryffindorContext'
import GryffProfileList from '../../components/GryffindorProfile/GryffProfileList';

export default function Gryffindor() {

  const [gryffindorData, setGryffindorData] = useState([]);

  useEffect(() => {
    getGryffindorHouse();
  }, [])

  const getGryffindorHouse = async () => {
    const gryffHouseData = await fetch(`https://hp-api.onrender.com/api/characters/house/gryffindor`);
    const gryffHouseJSONData = await gryffHouseData.json();
    setGryffindorData(gryffHouseJSONData);
  }

  return (
    <GryffindorContext.Provider value={gryffindorData}>
      <GryffProfileList />
    </GryffindorContext.Provider>
  )
}
