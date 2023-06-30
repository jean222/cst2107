import React, { useEffect } from 'react'
import PLStandingsContext from '../../context/PLStandingsContext'
import StandingsList from '../../component/Standings/StandingsList'

export default function StandingsPage() {


  useEffect(() => {
    getStandings();
  }, [])

  const getStandings = async ()=> {
    // const standingsData = await fetch('https://api.football-data.org/v4/competitions/PL/standings');
    const standingsData = await fetch('https://hp-api.onrender.com/api/spells');
    const standingsJSONData = await standingsData.json();
    console.log(standingsJSONData)
    console.log("rskjgsk")
  }
  

  return (
    <PLStandingsContext.Provider>
        <StandingsList />
    </PLStandingsContext.Provider>
  )
}
