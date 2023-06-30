import React, { useEffect, useState } from 'react'
import SlytherinContext from '../../context/SlytherinContext'
import SlythpProfileList from '../../components/SlytherinProifle/SlythpProfileList';

export default function Slytherin() {

  const [slytherinData, setSlytherinData] = useState([])

  useEffect(() => {
    getSlytherinHouse();
  }, [])

  const getSlytherinHouse = async() => {
    const slythHouseData = await fetch (`https://hp-api.onrender.com/api/characters/house/slytherin`);
    const slythHouseJSONData = await slythHouseData.json();
    //console.log(slythHouseJSONData);
    setSlytherinData(slythHouseJSONData);
  }
  return (
    // <div>Slytherin</div>
    <SlytherinContext.Provider value={slytherinData}>
      <SlythpProfileList />
    </SlytherinContext.Provider>
  )
}
