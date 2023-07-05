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
        <Grid container spacing={2}>
          {
            data.map((flagInfo, z) => (
              <Grid item xs={3} key={z} >
                <Paper elevation={16}>
                  <Typography align='center'>
                    <br />
                    <img src={flagInfo.flags.png} width={180}/>
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
