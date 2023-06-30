import React, { useContext } from 'react'
import HufflepuffContext from '../../context/HufflepuffContext'
import HuffProfileCard from './HuffProfileCard';
import './style.css'

export default function HuffProfileList() {
    const profilesList = useContext(HufflepuffContext);

  return (
    <div className='photo-container'>
        {
            profilesList.map((data, i) => {
                return <HuffProfileCard key={i} data={data} />
            })
        }

    </div>
  )
}
