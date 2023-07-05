import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';




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
                <Paper elevation={16} style={{height: '250px', background: 'transparent'}}>
                  <Typography align='center'>
                    <br />
                    <img src={flagInfo.flags.png} width={170}/>
                    <br />
                    <span>{flagInfo.name.common}</span>
                  </Typography>
                </Paper>
              </Grid>
            ))
          }
        </Grid>

      </Container>
    )
}
