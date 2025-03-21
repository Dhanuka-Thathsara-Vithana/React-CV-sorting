import { Box, Container, Grid, Grow } from '@mui/material';
import Calander from '../userDashboard/Calander'
import ComPerformance from './ComPerformance';
import Job from '../jobs/Job';

function ComDashboard() {
  return (
    <>
    <Container maxWidth="lg">
      <Grid
        width='1500px'
        paddingTop='20px'
        container
        direction="row"
        //justifyContent="center"
        alignItems="stretch"
        spacing={5}
        
      >
        <Grid item lg={7.5} xs={12}>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 700 } : {})}>  
                <Box borderRadius ='15px' sx={{ boxShadow: 3}}>
                    <ComPerformance/>
                </Box>
            </Grow>    
        </Grid>
        <Grid item lg={3} xs={12}>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1200 } : {})}> 
                <Box borderRadius ='15px' sx={{boxShadow: 3}}>
                <Calander/>
                </Box>
            </Grow>
        </Grid>
        <Grid item lg={10.1} xs={12}>
          <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1600 } : {})}>   
            <Box borderRadius ='15px' sx={{boxShadow: 3}}>
            <Job/>
            </Box>
          </Grow>  
        </Grid>
        <Grid item xs={12}>
          {/* <WatchList /> */}
        </Grid>
      </Grid>
    </Container>
   
  </>
  )
}

export default ComDashboard;