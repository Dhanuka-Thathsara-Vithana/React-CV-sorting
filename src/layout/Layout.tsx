import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import NavBar from './navbar/NavBar'
import { Outlet } from 'react-router-dom'
import backImg from '../assets/image.jpg'

const styles = {
    paperContainer: {
        backgroundImage: `url(${backImg})`
    }
};

function Layout() {
  return (
    <Paper style={styles.paperContainer}>
    <Box >
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={30}>
            <NavBar/>
        </Grid>
        <Grid item xs={6}>
             <Outlet/>
        </Grid>
    </Grid>
    </Box>
    </Paper>
  )
}

export default Layout