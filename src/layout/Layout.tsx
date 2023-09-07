import { Box, Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavBar from './navbar/NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import backImg from '../assets/image.jpg'

const styles = {
    paperContainer: {
        backgroundImage: `url(${backImg})`
    }
};


function Layout() {
  const navigate = useNavigate();
  const [user, setUser] = useState<string | undefined>('')

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, [])

  const handelLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('user');
    
    setUser('');
    
    navigate(''); 
  }

  return (
    <Paper style={styles.paperContainer}>
    <Box >
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={30}>
            <NavBar handelClick={handelLogout} user={user} name={user.fName} />
        </Grid>
        <Grid item xs={6}>
             <Outlet/>
        </Grid>
    </Grid>
    </Box>
    </Paper>
  )
}

export default Layout;