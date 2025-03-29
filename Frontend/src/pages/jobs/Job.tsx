import {
  Card,
  Box,
  Grid,
  Typography,
  Grow
} from '@mui/material';
import JobCard from './JobCard';
import { useNavigate } from 'react-router-dom';
import useJobs from '../../services/jobService';

function Job() {
  const navigate = useNavigate();

const job = useJobs();
const { data:jobCard, error } = useJobs();
  console.log(job.data)

console.log(error)

const handelId = (id: number) => {
  localStorage.setItem('jobCardId', JSON.stringify(id));
  navigate('/user/jobDec')
   console.log(id)
 }

  return (
    <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 700 } : {})}>   
    <Card sx={{width: '63rem', paddingLeft: '4rem', borderRadius: '15px'}}>
    <Box p={5} paddingTop='3rem'>
        <Typography
          sx={{
            pb: 3
          }}
          variant="h4"
        >
          All Jobs
        </Typography>
           
        <Grid container spacing={23}>
         
           {jobCard?.map((job) => (
             <Grid key={job._id} item xs={12} md={4} lg={3.4}>
               <JobCard
                  id={job._id}
                  image={job.image}
                  title={job.title}
                  subheader={job.pubDate}
                  des1={job.des1}
                  des2={job.des2}
                  handelClick={handelId}
               />
            </Grid>
            ))}

        </Grid>

        </Box>
       
    </Card>
    </Grow>
  )
}

export default Job