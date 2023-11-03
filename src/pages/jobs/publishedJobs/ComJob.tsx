import {
    Card,
    Box,
    Grid,
    Typography,
    useTheme,
    Grow
  } from '@mui/material';
  import ComJobCard from './comJobCard';
  import { useEffect, useState } from 'react';
  import axios, { CanceledError } from 'axios';
  import { useNavigate } from 'react-router-dom';
  
  interface JobProps {
    _id: number,
    image: string,
    title: string,
    pubDate: string,
    des1: string,
    des2: string
  }
  
  function ComJob() {
    const navigate = useNavigate();
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
  
  const handelIdView = (id: number) => {
    localStorage.setItem('jobCardId', JSON.stringify(id));
    navigate('/com/jobDec')
     console.log(id)
   }

   const handelIdCandi = (id: number) => {
    localStorage.setItem('jobCardId', JSON.stringify(id));
    navigate('/com/jobDec')
     console.log(id)
   }
  
    return (
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 700 } : {})}>   
      <Card sx={{width: '1300px', paddingLeft: '4rem', borderRadius: '15px'}}>
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
           
             {jobCard.map((job) => (
               <Grid key={job._id} item xs={12} md={4} lg={3.4}>
                 <ComJobCard
                    id={job._id}
                    image={job.image}
                    title={job.title}
                    subheader={job.pubDate}
                    des1={job.des1}
                    des2={job.des2}
                    handelClickView={handelIdView}
                    handelClickCandi={handelIdCandi}
                 />
              </Grid>
              ))}
  
          </Grid>
  
          </Box>
         
      </Card>
      </Grow>
    )
  }
  
  export default ComJob