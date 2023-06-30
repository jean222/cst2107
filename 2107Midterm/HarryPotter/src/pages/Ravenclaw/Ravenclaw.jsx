import React, { useEffect } from 'react'
import RavenclawContext from '../../context/RavenclawContext'
import ProfileList from '../../components/ProfileList'

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
      <ProfileList />
    </RavenclawContext.Provider>
  )
}
