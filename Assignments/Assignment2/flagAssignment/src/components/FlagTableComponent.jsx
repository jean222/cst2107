import { TableContainer, Table, TableHead, TableCell, TableRow, Grid} from '@mui/material';


const FlagTableComponent = ({ data }) => {
    return(
        
        data.map((countryFlag) => {
            return <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <Item>HELLO</Item>
                </Grid>
                
            </Grid>
        })
    )

}

export default FlagTableComponent