import React, { useEffect } from 'react'
import SlytherinContext from '../../context/SlytherinContext'
import SlythpProfileList from '../../components/SlytherinProifle/SlythpProfileList';

export default function Slytherin() {

  useEffect(() => {
    getSlytherinHouse();
  }, [])

  const getSlytherinHouse = async() => {
    const slythHouseData = await fetch (`https://hp-api.onrender.com/api/characters/house/slytherin`);
    const slythHouseJSONData = await slythHouseData.json();
    console.log(slythHouseJSONData);
  }
  return (
    // <div>Slytherin</div>
    <SlytherinContext.Provider>
      <SlythpProfileList />
    </SlytherinContext.Provider>
  )
}
