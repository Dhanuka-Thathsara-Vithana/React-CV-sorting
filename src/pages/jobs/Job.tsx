import {
  Card,
  Box,
  Grid,
  Typography,
  useTheme,
  Grow
} from '@mui/material';
import JobCard from 'src/content/dashboards/Crypto/JobCard';
import JobSt from './JobSt';
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
    <Card>
    <Box p={5}>
        <Typography
          sx={{
            pb: 3
          }}
          variant="h4"
        >
          All Jobs
        </Typography>
           
        <Grid container spacing={2.5}>
         
           {jobCard.map((job) => (
             <Grid key={job._id} item xs={12} md={4} lg={3.4}>
               <JobSt
                  id={job._id}
                  image={job.Image}
                  title={job.Title}
                  subheader={job.PubDate}
                  rating={job.Rating}
                  des1={job.Des1}
                  des2={job.Des2}
                  handelClick={handelId}
               />
            </Grid>
            ))}

        </Grid>

        </Box>
       
</Card>
  )
}

export default Job