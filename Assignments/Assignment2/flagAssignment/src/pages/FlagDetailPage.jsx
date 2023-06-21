import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';


const FlagDetailPage = () => {
    const { flag } = useParams();
    const [flagData, setFlagData] = useState({});

    useEffect(() => {
        getFlagDataByName();
    }, [flag]);


    const getFlagDataByName = async () => {
        const data = await fetch(`https://restcountries.com/v3.1/all/${flag}`);
        const convertedJSONData = await data.json();
        setFlagData(convertedJSONData);
    }



}

export default FlagDetailPage;