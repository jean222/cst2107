import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link } from 'react-router-dom';

export default function CryptoTableComponent({ data }) {
  return (
    <TableContainer component = {Paper}>
        <Table aria-label="Crypto table">
            <TableHead>
                <TableRow>
                    <TableCell>Coin</TableCell>
                    <TableCell>Symbol</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Price Change</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {
                    data.map((cryptoCurrency) => {
                        return <TableRow>
                            <TableCell>
                                <Box display={ 'flex' } alignItems={'center'} gap={8}>
                                    <img width={40} src={cryptoCurrency.image} />

                                        {/* Behind he scene it uses an anchor only */}
                                        <Link to={`/crypto/${cryptoCurrency.id}`}>
                                            {cryptoCurrency.name}
                                        </Link>
                                </Box>
                                
                            </TableCell>
                            <TableCell>{cryptoCurrency.name}</TableCell>
                            <TableCell>{cryptoCurrency.symbol}</TableCell>
                            <TableCell>{cryptoCurrency.current_price}</TableCell>
                            <TableCell>
                                {
                                    cryptoCurrency.price_change_percentage_24h > 0 ? <ArrowUpwardIcon color='primary'/> : <ArrowDownwardIcon color='error'/>
                                }
                                {cryptoCurrency.price_change_percentage_24h.toFixed(2)}%
                            </TableCell>
                        </TableRow>
                    })
                }
            
            </TableBody>
        </Table>
    </TableContainer>
  )
}
