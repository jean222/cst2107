import { useEffect, useState } from "react";
import FlagCardComponent from "./FlagCardComponent";

export default function FlagContainerComponent() {

    const [flagData, setFlagData] = useState([]);

    useEffect (() => {
        getFlagData();
    }, [] )

    const getFlagData = async () => {
        const data = await fetch('https://restcountries.com/v3.1/all')
        const convertedJSONData = await data.json();
        console.log(convertedJSONData, "data");
        setFlagData(convertedJSONData); 
    }

  return (
    <div>
        {
            <FlagCardComponent data={flagData}/>
        }
    </div>
  )
}

