import { Paper, Table, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';

export default function FlagCardComponent({ data }) {
  return (
    // <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    //     {Array.from(Array(6)).map((_, index) => (
    //         <Grid item xs={2} sm={4} md={4} key={index}>
    //             {/* <Item>xs=2</Item> */}
    //         </Grid>
    //     ))}
    // </Grid>

    <TableContainer component={Paper}>
        <Table>
        <TableHead>
                    <TableRow>
                        <TableCell>Coin</TableCell>
                        <TableCell>Symbol</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Price Change</TableCell>
                    </TableRow>
                </TableHead>
        </Table>

    </TableContainer>
  )
}
