import { Card, Box, Grid, Typography } from '@mui/material';
import PerformanceCard from './PerformanceCard';

function UserPerformance() {
  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: '1200px',
        borderRadius: '15px',
        opacity: '0.8',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
        },
        mx: 'auto', // Center the card
        my: { xs: 2, sm: 3 },
      }}
    >
      <Box
        sx={{
          p: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Typography
          variant="h5"
          fontFamily="sans-serif"
          fontStyle="oblique"
          sx={{
            pb: { xs: 2, sm: 3 },
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.7rem' },
          }}
        >
          Dhanuka Performance
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          justifyContent="center"
        >
          <Grid item xs={12} sm={6} md={4}>
            <PerformanceCard
              start={0}
              end={500}
              title="Available Jobs"
              b1="#D1E9FC"
              b2="#79c2fc"
              link="jobs"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PerformanceCard
              start={0}
              end={10}
              title="Applied Jobs"
              b1="#D0F2FF"
              b2="#68d3fc"
              link="education"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PerformanceCard
              start={0}
              end={250}
              title="Recommended Jobs"
              b1="#FFF7CD"
              b2="#ffed87"
              link=""
            />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

export default UserPerformance;
