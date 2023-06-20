import { TableContainer, Table, TableHead, TableCell, TableRow } from '@mui/material';


const FlagTableComponent = () => {
    return(
        <TableContainer>
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

export default FlagTableComponent