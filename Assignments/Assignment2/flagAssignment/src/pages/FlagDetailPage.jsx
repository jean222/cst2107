import { CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function FlagDetailPage() {

  const {country } = useParams();
  const [flagData, setFlagData] = useState({})

  useEffect(() => {

  }, [country]);

  const getFlagDataByName = async () => {
    const data = await fetch(`https://restcountries.com/v3.1/all/${country}`)
    const convertedJSONData = await data.json();
    console.log(convertedJSONData, 'data')
    setFlagData(convertedJSONData);
  }

  return <Card sx={{maxWidth: 345}}>
    <CardMedia
    component={'img'}
    alt='soon'
    height={'140'}
    image={flagData.flags.png}
    />

    <CardContent>
      <Typography gutterBottom variant='h1'>
        {flagData.name.common}
      </Typography>
    </CardContent>
  </Card>
}
