import { Box, Grid, Paper } from '@mui/material';
import React from 'react';
import UserNavBar from './userLayout/navbar/NavBar';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import backImg from '../assets/image.jpg';

const styles = {
  paperContainer: {
    backgroundImage: `url(${backImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    minWidth: '100vw',
    margin: 0,
    padding: 0,
    overflowX: 'hidden'
  },
};

function Layout() {
  const { user, logout } = useAuth();

  return (
    <Paper style={styles.paperContainer} elevation={0} square>
      <Box sx={{ flexGrow: 1, margin: 0, padding: 0, width: '100vw', overflowX: 'hidden' }}>
        <Grid container spacing={0} sx={{ margin: 0, width: '100%', maxWidth: '100vw' }}>
          <Grid item xs={12} sx={{ padding: 0, width: '100%' }}>
            <UserNavBar handelClick={logout} user={user} name={user?.fName || ''} />
          </Grid>
          <Grid item xs={12} sx={{ padding: 0, width: '100%' }}>
            <Box sx={{ width: '100%', padding: 0, '& > *': { maxWidth: '100vw', overflowX: 'hidden' } }}>
              <Outlet />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default Layout;