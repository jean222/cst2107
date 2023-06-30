import React, { useContext } from 'react'
import SlytherinContext from '../../context/SlytherinContext'
import './style.css'
import SlythProfileCard from './SlythProfileCard';

export default function SlythpProfileList() {
    const profilesList = useContext(SlytherinContext);

  return (
    <div className='photo-container'>
        {
            profilesList.map((data, i) => {
                return <SlythProfileCard key={i} data={data} />
            })
        }
    </div>

  )
}
