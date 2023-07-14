// import DetailCardComponent from '../components/DetailCardComponent';
// import DetailsContainerComponent from '../components/DetailsContainerComponent'


// const FlagDetailPage = () => {
//   return(
//     <div>
//       <DetailsContainerComponent />
//     </div>
//   )

// }
// export default FlagDetailPage;


import React, { useEffect, useState } from 'react'
import DetailsContainerComponent from '../components/DetailsContainerComponent'
import { useParams } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

const FlagDetailPage = () => {
  const { country } = useParams();
  const [flagData, setFlagData] = useState({})

  useEffect(() => {
    getFlagDataByName
  }, [country]);

  const getFlagDataByName = async () => {
    const data = await fetch(`https://restcountries.com/v3.1/all/${country}`)
    const convertedJSONData = await data.json();
    console.log(convertedJSONData, "data")
    setFlagData(convertedJSONData); 
}
  return <Card sx={{maxWidth: 345 }}>
    <CardMedia 
      component={'img'}
      alt='do alt from the api'
      height={'140'}
      image={`flagData.flags.svg`}
      />

      <CardContent>
        <Typography gutterBottom variant='h1'>
          {flagData.name.common}
        </Typography>

      </CardContent>

  </Card>
}

export default FlagDetailPage;
