import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from '@mui/material'


const CryptoDetailPage = () => {
    // React router dom also provides a way to access what is present in the URL as a parameter

    const {coins} = useParams();
    const [cryptoData, setCryptoData] = useState({});


    useEffect(() => {
        getCryptoDataById();
    }, [coin]);

    const getCryptoDataById = async () => {
        const data = await fetch (`https://api.coingecko.com/api/v3/coins/${coin}`);
        const convertedJSONData = await data.json();
        setCryptoData(convertedJSONData);
    }

    return <Card>
        <CardMedia 
        component="img"
        alt="green iguana"
        height="140"
        image={cryptoData.image.large}
        />

        <CardContent>
            <Typography gutterBottom variant="h4">
                {cryptoData.name}
            </Typography>
        </CardContent>

    </Card>
}

export default CryptoDetailPage;