import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Card, CardContent, CardMedia, Typography,Paper, Grid } from '@mui/material'
import '../App.css'

const FlagDetailPage = () => {
  const { country } = useParams();
  const [flagData, setFlagData] = useState([])

  useEffect(() => {
    getFlagDataByName()
  }, [country]);

  useEffect(() => {
    if (flagData) {
      console.log('data flags', flagData)
    }
  }, [flagData])
  const auth = undefined;

  const getFlagDataByName = async () => {
    const data = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    const convertedJSONData = await data.json();
    console.log(convertedJSONData, "data")
    setFlagData(convertedJSONData[0]); 
}
  
return <div align="center">
  <Box justifyContent={'space-around'} width={'500px'} >
      <img src={flagData.flags?.svg} width={450} />

      <Typography gutterBottom variant='h4'>
        {flagData.name?.common}
      </Typography>
      <Typography>
        <b>Official Name: </b> {flagData.name?.official}
      </Typography>

      <Typography>
        {flagData.continents}
      </Typography>

      <span>
        <br></br>
      </span>

      <Typography>
        <b>About the flag:</b> {flagData.flags?.alt}
      </Typography>
      
  </Box>
</div>

}
export default FlagDetailPage;
