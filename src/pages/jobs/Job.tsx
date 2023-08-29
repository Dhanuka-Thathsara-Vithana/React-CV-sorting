import {
  Card,
  Box,
  Grid,
  Typography,
  useTheme,
  Grow
} from '@mui/material';
import JobCard from './JobCard';
import { useEffect, useState } from 'react';
import axios, { CanceledError } from 'axios';

interface JobProps {
  _id: number,
  Image: string,
  Title: string,
  PubDate: string,
  Rating: number,
  Des1: string,
  Des2: string
}

function Job() {
  const [jobCard, setJobCard] = useState<JobProps[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get<JobProps[]>('http://localhost:5000/api/jobCard')
      .then((res) => setJobCard(res.data))
      .catch(err => {
        if(err instanceof CanceledError) return;
        setError(err.message)
      });
      return () => controller.abort();
  }, [])
console.log(jobCard)
const handelId = (id: number) => {
  localStorage.setItem('jobCardId', JSON.stringify(id));
  
   console.log(id)
 }

  return (
    <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 700 } : {})}>   
    <Card sx={{width: '1200px', paddingLeft: '4rem', borderRadius: '15px'}}>
    <Box p={5} paddingTop='3rem'>
        <Typography
          sx={{
            pb: 3
          }}
          variant="h4"
        >
          All Jobs
        </Typography>
           
        <Grid container spacing={25}>
         
           {jobCard.map((job) => (
             <Grid key={job._id} item xs={12} md={4} lg={3.4}>
               <JobCard
                  id={job._id}
                  image={job.Image}
                  title={job.Title}
                  subheader={job.PubDate}
                  rating={job.Rating}
                  des1={job.Des1}
                  des2={job.Des2}
              
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