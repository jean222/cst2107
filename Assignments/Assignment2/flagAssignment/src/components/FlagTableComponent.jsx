import { TableContainer, Table, TableHead, Box, TableCell, TableRow, Grid, TableBody} from '@mui/material';


const FlagTableComponent = ({ data }) => {
    return(
        <TableContainer >
            <Table>
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
                        data.map((flagCountry) => {
                            return <div>{flagCountry.name.common}</div>
                        }) 
                    }
                </TableBody>
            </Table>
        </TableContainer>        
        
        // data.map((countryFlag) => {
        //     return <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        //         <Grid item xs={2} sm={4} md={4} key={index}>
        //             <Item>HELLO</Item>
        //         </Grid>
                
        //     </Grid>
        // })

        
        
    ) 

}

export default FlagTableComponent