import React, { useEffect } from 'react'
import RavenclawContext from '../../context/RavenclawContext'
import RavenProfileList from '../../components/RavenclawProfile/RavenProfileList';

export default function Ravenclaw() {

  useEffect(() => {
    getRavenclawHouse();
  }, [])

  const getRavenclawHouse = async () => {
    const ravenHouseData = await fetch (`https://hp-api.onrender.com/api/characters/house/ravenclaw`);
    const ravenHouseJSONData = await ravenHouseData.json();
    console.log(ravenHouseJSONData);
  }

  return (
    // <div>Ravenclaw</div>
    <RavenclawContext.Provider>
      <RavenProfileList />
    </RavenclawContext.Provider>
  )
}
