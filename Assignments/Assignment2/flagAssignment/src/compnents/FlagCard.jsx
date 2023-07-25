import { Container, Grid, Paper, Typography, Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';


export default function FlagCard({data}) {
  return (
    <Container>
        <Grid container spacing={3}>
            {
                data.map((flagInfo, z) => {
                    <Grid item xs={3} key={z}>
                        <Paper elevation={24}>
                            <Typography align='center' sx={{mx:1, py:1}}>
                                <img src={flagInfo.flags.png} width={'100%'} height={120} />
                                <br />
                                <span>{flagInfo.name.common}</span>
                            </Typography>

                            <br />

                            <Box textAlign={'center'}>
                                <Button LinkComponent={Link} to={`/flag/${flagInfo.name.common}`} ></Button>
                            </Box>

                        </Paper>
                    </Grid>
                }) 
            }
        </Grid>
    </Container>
  )
}
