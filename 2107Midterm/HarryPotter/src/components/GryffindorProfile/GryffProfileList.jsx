import React, { useContext } from 'react'
import GryffindorContext from '../../context/GryffindorContext'
import ProfileCard from './GryffProfileCard';
import './style.css';
import GryffProfileCard from './GryffProfileCard';

export default function GryffProfileList() {

  const profilesList = useContext(GryffindorContext);

  return (
  <div className='photo-container'>
    {
      profilesList.map((data, i) => {
        return <GryffProfileCard key={i} data={data}/>
      })
    }
    
  </div>
  )
}
