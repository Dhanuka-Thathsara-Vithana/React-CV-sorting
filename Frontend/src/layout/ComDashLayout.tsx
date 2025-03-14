import { Box, Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import ComSideBar from './comLayout/sidebar/ComSideBar'

function ComDashLayout() {
  return (
    <Box >
        <Grid  width='100px'
        paddingTop='1rem'
        container
        direction="row"
        alignItems="stretch"
        spacing={5}>
            <Grid item xs={3}>
                <ComSideBar/>
            </Grid>
            <Grid item xs={3}>
                <Box paddingLeft='350px' paddingTop='1rem'>
                <Outlet/>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default ComDashLayout