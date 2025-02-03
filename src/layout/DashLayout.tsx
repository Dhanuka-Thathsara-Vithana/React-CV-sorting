import { Box, Grid } from '@mui/material'
import React from 'react'
import UserSideBar from './userLayout/sidebar/SideBar'
import { Outlet } from 'react-router-dom'

function DashLayout() {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh' }}>
      <Grid
        container
        sx={{
          width: '100%',
          minHeight: '100vh',
          pt: 2,
        }}
      >
        {/* Sidebar */}
        <Grid 
          item 
          sx={{ 
            width: { xs: '4rem', sm: '16.2rem' },
            height: 'calc(100vh - 16px)',
            overflowY: 'auto',
            transition: 'width 0.3s ease'
          }}
        >
          <UserSideBar />
        </Grid>

        {/* Main Content */}
        <Grid 
          item 
          sx={{ 
            position: 'fixed',
            width: { 
              xs: 'calc(100% - 4rem)',
              sm: 'calc(100% - 16.2rem)'
            },
            ml: { 
              xs: '4rem',
              sm: '16.2rem'
            },
            p: 2,
            transition: 'all 0.3s ease'
          }}
        >
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}

export default DashLayout;