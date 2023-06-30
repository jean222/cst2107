import React, { useContext } from 'react'
import RavenclawContext from '../../context/RavenclawContext'
import './style.css'
import RavenProfileCard from './RavenProfileCard';

export default function RavenProfileList() {
    const profilesList = useContext(RavenclawContext);

  return (
    <div className='photo-container'>
        {
            profilesList.map((data, i) => {
                return <RavenProfileCard key={i} data={data}/>
            })
        }
    </div>
  )
}
