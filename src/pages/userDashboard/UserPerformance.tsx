import {
  Card,
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material';
import Counter from './Counter';
import PerformanceCard from './PerformanceCard';

function UserPerformance() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Card 
      sx={{
        borderRadius: '15px',
        opacity: '0.8',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
        },
        mx: { xs: 2, sm: 3, md: 4 },
        my: { xs: 2, sm: 3 }
      }}
    >
      <Box 
        sx={{
          p: { xs: 2, sm: 3, md: 4 },
          pl: { xs: 2, sm: 3, md: 5 }
        }}
      >
        <Typography
          variant="h5"
          fontFamily="sans-serif"
          fontStyle="oblique"
          sx={{
            pb: { xs: 2, sm: 3 },
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.7rem' }
          }}
        >
          Dhanuka Performance
        </Typography>
        
        <Box sx={{ mt: { xs: 1, sm: 2, md: 3 } }}>
          <Grid 
            container 
            spacing={{ xs: 2, sm: 4, md: 6, lg: 8 }}
            justifyContent="start"
            alignItems="center"
          >
            <PerformanceCard 
              start={0} 
              end={500} 
              title="Available Jobs" 
              b1="#D1E9FC" 
              b2="#79c2fc" 
              link="jobs"
            />
            <PerformanceCard 
              start={0} 
              end={10} 
              title="Applied Jobs" 
              b1="#D0F2FF" 
              b2="#68d3fc" 
              link="education"
            />
            <PerformanceCard 
              start={0} 
              end={250} 
              title="Recommended Jobs" 
              b1="#FFF7CD" 
              b2="#ffed87" 
              link=""
            />
          </Grid>
        </Box>
      </Box>
    </Card>
  );
}

export default UserPerformance;