import { Grid } from '@mui/material'
import React from 'react'
import SideBar from './sidebar/SideBar'
import { Outlet } from 'react-router-dom'

function DashLayout() {
  return (
    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
     <SideBar/>
  </Grid>
  <Grid item xs={6}>
     <Outlet/>
  </Grid>
</Grid>
  )
}

export default DashLayout