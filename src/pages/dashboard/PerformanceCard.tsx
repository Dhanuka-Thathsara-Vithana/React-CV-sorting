import { Card, Grid, Grow, Typography } from '@mui/material'
import React from 'react'
import Counter from './Counter'

interface Props {
    start: number,
    end: number,
    title: string,
    b1: string,
    b2: string

}

function PerformanceCard({start, end, title, b1, b2}:Props) {
  return (
    <Grid item xs={12} md={4} lg={3}>
    <Grow in={true}>
    <Card
        sx={{
          width: 200,
          height: 200,
          backgroundColor: b1,
          borderRadius: '12px',
          textAlign: 'center',
          '&:hover': {
            backgroundColor: b2,
            CSSTransition: '0.8s',
            opacity: [0.9, 0.8, 0.7]
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
  </Grow>
</Grid>
  )
}

export default PerformanceCard