import React from 'react'
import {
    Card,
    Box,
    Grid,
    Typography,
    useTheme,
    Grow
  } from '@mui/material';
import RecJobCard from './RecJobCard';

const jobs = [
    {
        _id: '1',
        image: 'https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200',
        title: 'React Developer',
        subheader: 'Published - 2023.08.12',
        rating: 3,
        des1: 'Full Time',
        des2: 'Translate design concepts and wireframes into efficient, reusable, and scalable code'
    },
     {
        _id: '2',
        image: 'https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200',
        title: 'Anroid Developer',
        subheader: 'Published - 2023.08.12',
        rating: 2,
        des1: 'Full Time',
        des2: 'Translate design concepts and wireframes into efficient, reusable, and scalable code'
    },
    {
        _id: '3',
        image: 'https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200',
        title: 'Full Stack Developer',
        subheader: 'Published - 2023.08.12',
        rating: 4,
        des1: 'Full Time',
        des2: 'Translate design concepts and wireframes into efficient, reusable, and scalable code'
    }
]

function RecJobGrid() {
  return (
    <Card sx={{borderRadius: '15px'}} >
    <Box p={5} paddingLeft='4rem' paddingTop='1.2rem'>
        <Typography
          sx={{
            pb: 3
          }}
          variant="h5"
        >
          Recomemded Jobs
        </Typography>
        <Grow in={true} {...(true ? { timeout: 800 } : {})} >   
        <Grid container spacing={9}>
         
           {jobs.map((job) => (
             <Grid key={job._id} item xs={12} md={4} lg={3.7}>
               <RecJobCard
                  image={job.image}
                  title={job.title}
                  subheader={job.subheader}
                  rating={job.rating}
                  des1={job.des1}
                  des2={job.des2}
               />
            </Grid>
            ))}

        </Grid>
        </Grow>
        </Box>
       
</Card>
  )
}

export default RecJobGrid