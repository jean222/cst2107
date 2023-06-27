import { Box, Container, Grid } from '@mui/material';


export default function FlagCardComponent({ data }) {
  return (
    // <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    //     {Array.from(Array(6)).map((_, index) => (
    //         <Grid item xs={2} sm={4} md={4} key={index}>
    //             {/* <Item>xs=2</Item> */}
    //         </Grid>
    //     ))}
    // </Grid>

    // <TableContainer component={Paper}>
    //     <Table>
    //     <TableHead>
    //                 <TableRow>
    //                     <TableCell>Coin</TableCell>
    //                     <TableCell>Symbol</TableCell>
    //                     <TableCell>Price</TableCell>
    //                     <TableCell>Price Change</TableCell>
    //                 </TableRow>
    //             </TableHead>
    //     </Table>

    // </TableContainer>

    // <Container sx={{py:8}} maxWidth="md">
    //   <Grid container spacing={4}>
    //     {
    //       data.map((flagInfo) => {
    //         return <Grid item key={flagInfo} xs={12} md={4}>
    //           <Card sx={{height: '100%', display: 'flex', flexDirection:'column'}}>
    //             <CardMedia
    //               component={"div"}
    //               sx={{pt: '56.25%',}}>
    //                 image="https://source.unsplash.com/random?wallpapers"
    //             </CardMedia>

    //           </Card>
    //         </Grid>
    //       })
    //     }

    //   </Grid>
    // </Container >

      // <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
      //   {
      //     data.map((flagInfo, i) => {
      //       <Grid item xs={2} sm={4} md={4} key={i}>
      //         <div>HEELLOOODJHFB FDKH</div>
      //       </Grid>
      //     })
      //   }
      // </Grid>

    
    // <Container maxWidth="md">
    //   <h1 style={{backgroundColor: '#cfe8fc'}}>
    //   Container of maxWidth = lg
    //   </h1>
    // </Container>

    <Container style={{ display: "flex", flexDirection: "row" }}>
      {
        data.map((flagInfo, i) => {
          // return <Grid container spacing={{ xs: 2, md: 3 }} rowSpacing={1} columns={{ xs: 4, sm: 8, md: 12 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  key={i}>
              return <Box>
              <h1>AAAAAAAAAz</h1>
              </Box>
            // </Grid>
        })
      }

    </Container>


  )
}
