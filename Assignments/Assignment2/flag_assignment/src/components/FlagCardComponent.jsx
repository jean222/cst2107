import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import '../App.css'




export default function FlagCardComponent({ data }) {
  
    // <Container style={{ display: "flex", flexDirection: "row" }}>
    //   {
    //     data.map((flagInfo, z) => {
    //           return <Grid container spacing={2} key={z}>
    //           <Grid item xs={3}>
    //             <Container>
    //               <h3>hii</h3>
    //             </Container>
    //           </Grid>
    //         // </Grid>
    //     })
    //   }
    return (
      <Container>
        <Grid container spacing={3}>
          {
            data.map((flagInfo, z) => (
              <Grid item xs={3} key={z} >

                <Paper className='blueishPaper' elevation={24} style={{height: '250px'}} >

                  <Typography align='center' sx={{mx:1, py: 1}}>
                    
                    <img src={flagInfo.flags.png} width={'100%'} height={120}/>
                    <br />
                    <span>{flagInfo.name.common}</span>
                  </Typography>

                  <br />

                  <Box textAlign={'center'}>
                    <Button LinkComponent={Link} to='/flag' variant='contained' 
                      style={{maxHeight:20}}>Learn more</Button>
                  </Box>

                  
                </Paper>

              </Grid>
            ))
          }
        </Grid>

      </Container>
    )
}
