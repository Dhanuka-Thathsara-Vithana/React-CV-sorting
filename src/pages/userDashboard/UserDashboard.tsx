import { Box, Container, Grid, Grow } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import Calander from './Calander';
import UserPerformance from './UserPerformance';
import RecJobGrid from './RecJobGrid';
import Job from '../jobs/Job';

function UserDashboard() {
  return (
    <>
      
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
          paddingTop="20px"
        >
          {/* UserPerformance and Calendar Sections */}
          <Grid item container spacing={3} lg={10} md={10} xs={12}>
            <Grid item lg={8} md={8} xs={12}>
              <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 700 } : {})}>
                <Box borderRadius="15px" sx={{ boxShadow: 3, bgcolor: 'white' }}>
                  <UserPerformance />
                </Box>
              </Grow>
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1200 } : {})}>
                <Box borderRadius="15px" sx={{ boxShadow: 3 }}>
                  <Calander />
                </Box>
              </Grow>
            </Grid>
          </Grid>

          {/* Job Section */}
          <Grid item lg={10} md={10} xs={12}>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1600 } : {})}>
              <Box borderRadius="15px" sx={{ boxShadow: 3 }}>
                <Job />
              </Box>
            </Grow>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default UserDashboard;
