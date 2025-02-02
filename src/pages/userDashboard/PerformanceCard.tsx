import { Card, Grid, Grow, Typography } from '@mui/material'
import React from 'react'
import Counter from './Counter'
import { Link } from 'react-router-dom'

interface Props {
    start: number,
    end: number,
    title: string,
    b1: string,
    b2: string,
    link: string
}

function PerformanceCard({start, end, title, b1, b2, link}: Props) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Grow in={true}>
        <Link to={`${link}`} style={{ textDecoration: 'none', display: 'block', width: '100%' }}>
          <Card
            sx={{
              width: '100%',
              aspectRatio: '1/1',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '1rem',
              backgroundColor: b1,
              borderRadius: '12px',
              textAlign: 'center',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: b2,
                transform: 'scale(1.02)',
                boxShadow: 6,
              }
            }}
          >
            <Typography 
              variant="subtitle2"
              fontFamily='sans-serif'
              fontWeight='440'
              sx={{
                opacity: 0.72,
                mb: 2,
                fontSize: {
                  xs: '0.9rem',
                  sm: '1rem',
                  md: '1.1rem'
                }
              }}
            >
              {title}
            </Typography>
            <Typography 
              variant="h4"
              fontFamily='sans-serif'
              fontWeight='550'
              sx={{
                fontSize: {
                  xs: '1.5rem',
                  sm: '1.75rem',
                  md: '2rem'
                }
              }}
            >
              <Counter start={start} end={end}/>
            </Typography>
          </Card>
        </Link>
      </Grow>
    </Grid>
  )
}

export default PerformanceCard