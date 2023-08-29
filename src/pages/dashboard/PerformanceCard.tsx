import { Card, Grid, Grow, Typography } from '@mui/material'
import React from 'react'
import Counter from './Counter'
import { transform } from 'framer-motion'
import { Link } from 'react-router-dom'

interface Props {
    start: number,
    end: number,
    title: string,
    b1: string,
    b2: string
    link: string
}

function PerformanceCard({start, end, title, b1, b2, link}:Props) {
  return (
    <Grid item xs={12} md={4} lg={3}>
    <Grow in={true}>
      <Link to={`${link}`}>
    <Card
        sx={{
          width: 200,
          height: 200,
          backgroundColor: b1,
          borderRadius: '12px',
          textAlign: 'center',
          transition: "transform 0.15s ease-in-out",
          '&:hover': {
            backgroundColor: b2,
            CSSTransition: '10s',
            opacity: [1, 1, 1],
            transform: "scale3d(1.02, 1.02, 1)"
          },
          ':hover': {
            boxShadow: 20
          }
         
        }}
      >
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }} 
        style={{ transformOrigin: '0 0 0' }}
      >
        <h4>{title}</h4>
      </Typography>
      <Typography variant="h4"><Counter start={start} end={end}/></Typography>
    </Card>
    </Link>
  </Grow>
</Grid>
  )
}

export default PerformanceCard