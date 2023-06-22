import { useEffect, useState } from "react";

export default function FlagContainerComponent() {

    //4
    const [flagData, setFlagData] = useState([]);

    // This what shows in the Home Page 
    // We going to call the API here => useEffect
    //1
    useEffect (() => {
        //This where we're going cll our API
        //3
        getFlagData();
    }, [] )

    //2
    const getFlagData = async () => {
        const data = await fetch('https://restcountries.com/v3.1/all')
        const convertedJSONData = await data.json();
        console.log(convertedJSONData, "data")
        //5
        setFlagData(convertedJSONData); // Whatever you are calling in here, it saves in the flagData in the useState

    }


  return (
    <>
        {
            // 6
            // flagData.map((flagInfo) => {
            //     return <div>{flagInfo.name.common}</div>
            // })
        }
    </>
  )
}

