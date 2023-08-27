import { Box, Grid } from '@mui/material'
import React from 'react'
import SideBar from './sidebar/SideBar'
import { Outlet } from 'react-router-dom'

function DashLayout() {
  return (
    // <>
    // <Box>
    //      <SideBar/>
    //     <Box>
    //       <Box >
    //         <Outlet />
    //       </Box>
    //     </Box>
    //   </Box>
    // </>


    <Box >
        <Grid  width='100px'
        paddingTop='1rem'
        container
        direction="row"
        alignItems="stretch"
        spacing={5}>
            <Grid item xs={3}>
                <SideBar/>
            </Grid>
            <Grid item xs={3}>
                <Box paddingLeft='250px'>
                <Outlet/>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default DashLayout