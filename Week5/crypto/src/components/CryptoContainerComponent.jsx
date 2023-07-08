import { useEffect, useState } from "react";
import CryptoTableComponent from "./CryptoTableComponent";
import { TextField } from "@mui/material";

const CryptoContainerComponent = () => {


    const [cryptoData, setCryptoData] = useState([]);

    //UseEffect

    // This will only be called once. Why? Because it does not have any dependency, because it should not be retriggered again if something changes.
    useEffect(() => {
        // This is the place where we will call our API
        getCryptoData();

    }, [])

    const getCryptoData = async () => {
        const data = await fetch('https://api.coingecko.com/api/v3/coins/markets/?vs_currency=cad');
        const convertedJSONData = await data.json(); // convert the api to json??
        setCryptoData(convertedJSONData);
    
    }

    return (
        <div>
            {/* {
                cryptoDta.map((cryptoInfo) => {
                    return <div>{cryptoInfo.name}</div>
                })
            } */}

            <CryptoTableComponent data={cryptoData}/>
        </div>
    )
}

export default CryptoContainerComponent;