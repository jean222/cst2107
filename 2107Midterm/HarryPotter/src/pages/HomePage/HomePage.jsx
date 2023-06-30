import React from 'react'
import Slytherin from '../Slytherin/Slytherin'
import { ButtonGroup, Button, Box, colors } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import './HomePage.css'

export default function HomePage() {

  const navigate = useNavigate();

  const navigateGryffindor= () => {
    navigate('/gryffindor');
  }

  const navigateHufflepuff = () => {
    navigate('hufflepuff');
  }

  const navigateRavenclaw = () => {
    navigate('ravenclaw');
  }

  const navigateSlytherin = () => {
    navigate('slytherin');
  }
 

  return (
    <>
    <header>
      <p>Harry Potter</p>
    </header>
    
      <div className='grp-btn'>
        <button onClick={navigateGryffindor}>Gryffindor</button>
        <button onClick={navigateHufflepuff}>Hufflepuff</button>
        <button onClick={navigateRavenclaw}>Ravenclaw</button>
        <button onClick={navigateSlytherin}>Slytherin</button>
      </div>
    </>
  )
}
