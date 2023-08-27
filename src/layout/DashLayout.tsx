import { Box, Grid } from '@mui/material'
import React from 'react'
import SideBar from './sidebar/SideBar'
import { Outlet } from 'react-router-dom'

function DashLayout() {
  return (
    <>
    <Box
        sx={{
          flex: 1,
          height: '100%'
        }}
      >
         <SideBar/>
        <Box
          sx={{
            position: 'relative',
            zIndex: 5,
            display: 'block',
            flex: 1,
            pt: '110px',
          }}
        >
          <Box display="block">
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>


//     <Box sx={{width: '4500px'}}>
//     <Grid>
//   <Grid item xs={3}>
//      <SideBar/>
//   </Grid>
//   <Grid item xs={3}>
//      <Outlet/>
//   </Grid>
// </Grid>
// </Box>
  )
}

export default DashLayout