import {
    Card,
    Box,
    Grid,
    Typography,
    useTheme,
    Grow
  } from '@mui/material';
import PerformanceCard from '../userDashboard/PerformanceCard';
  
function ComPerformance() {
  return (
    <Card sx={{borderRadius: '15px',opacity: '0.8',
       transition: "transform 0.16s ease-in-out",
    '&:hover': {
      CSSTransition: '10s',
      transform: "scale3d(1.03, 1.03, 1)"
    }
    }}>
    <Box p={4} paddingLeft='5rem' >
        <Typography
          sx={{
            pb: 3
          }}
          variant="h5"
          fontFamily='sans-serif'
          fontStyle='oblique'
        >
          Dhanuka Perfomance
        </Typography>
        <Box >
        <Grid container spacing={20}>
          
        <PerformanceCard start={0} end={500} title={'Applied Condidates'} b1={'#D1E9FC'} b2={'#79c2fc'} link={'jobs'}/>
        <PerformanceCard start={0} end={10} title={'Posted Jobs'} b1={'#D0F2FF'} b2={'#68d3fc'} link={'education'}/>
        <PerformanceCard start={0} end={250} title={'Pending Jobs'} b1={'#FFF7CD'} b2={'#ffed87'} link={''}/>
        
        </Grid>
        </Box> 
        </Box>
   
</Card>
  )
}

export default ComPerformance