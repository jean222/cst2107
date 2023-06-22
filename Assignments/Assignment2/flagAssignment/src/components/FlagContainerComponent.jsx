import { useState } from 'react';
import { useEffect } from 'react';
import FlagTableComponent from './FlagTableComponent';


const FlagContainerComponent = () => {
    
    const [flagData, setFlagData] = useState([]);

    // This will only be called once
    // This is where we will call the API
    useEffect(() => {
        
    }, [])

    const getFlagData = async () => {
        const data = await fetch(`https://restcountries.com/v3.1/all`); //API
        const convertedJSONData = await data.json();
        setFlagData(convertedJSONData);

    }

    return (
        <div>
            <FlagTableComponent data={flagData} />
        </div>
    )

}

export default FlagContainerComponent;