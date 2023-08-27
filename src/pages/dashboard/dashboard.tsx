import { Container, Grid } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import Calander from './Calander';
import UserPerformance from './UserPerformance';

function Dashboard() {
  return (
    <>
    <Container maxWidth="lg">
      <Grid
        width='1800px'
        paddingTop='20px'
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={5}
        paddingLeft='23rem'
      >
        <Grid item lg={8} xs={12}>
        <UserPerformance/>
        </Grid>
        <Grid item lg={3} xs={12}>
          <Calander/>
        </Grid>
        <Grid item lg={25} xs={12}>
        {/* <JobPostGrid/> */}
        </Grid>
        <Grid item xs={12}>
          {/* <WatchList /> */}
        </Grid>
      </Grid>
    </Container>
   
  </>
  )
}

export default Dashboard;