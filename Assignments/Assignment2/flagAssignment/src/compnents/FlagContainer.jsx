import React from 'react'
import FlagCard from './FlagCard'
import { useEffect, useState } from "react";


export default function FlagContainer() {

    const [flagData, setFlagData] = useState([]);


    useEffect (() => {
        getFlagData();
    }, [] )

    const getFlagData = async () => {
        const data = await fetch('https://restcountries.com/v3.1/all')
        const convertedJSONData = await data.json();
        console.log(convertedJSONData, "data of flags");
        setFlagData(convertedJSONData); 
    }


  return (
    <div>
        {
            <FlagCard data={flagData}/>
        }
    </div>
  )
}
