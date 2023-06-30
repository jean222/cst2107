import React from 'react'
import Slytherin from '../Slytherin/Slytherin'
import { ButtonGroup, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'

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
    <ButtonGroup size="large" variant="text" aria-label="text button group">
        <Button onClick={navigateGryffindor}>Gryffindor</Button>
        <Button onClick={navigateHufflepuff}>Hufflepuff</Button>
        <Button onClick={navigateRavenclaw}>Ravenclaww</Button>
        <Button onClick={navigateSlytherin}>Slytherin</Button>
    </ButtonGroup>
    </>
  )
}
