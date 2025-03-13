import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Unauthorized = () => {
  const { user } = useAuth();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      textAlign="center"
      padding={3}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        Access Denied
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        You don't have permission to access this page.
      </Typography>
      
      {user && (
        <Typography variant="body1" paragraph>
          Your account type ({user.role}) doesn't have the required permissions.
        </Typography>
      )}
      
      <Box mt={4}>
        <Button 
          component={Link} 
          to={user?.role === 'company' ? '/com' : '/user'} 
          variant="contained" 
          color="primary" 
          sx={{ mr: 2 }}
        >
          Go to Dashboard
        </Button>
        <Button 
          component={Link} 
          to="/" 
          variant="outlined"
        >
          Back to Home
        </Button>
      </Box>
    </Box>
  );
};

export default Unauthorized;