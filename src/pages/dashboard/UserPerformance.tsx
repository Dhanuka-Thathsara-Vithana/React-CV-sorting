import {
    Card,
    Box,
    Grid,
    Typography,
    useTheme,
    Grow
  } from '@mui/material';
  import Counter from './Counter';
  

function UserPerformance() {
  return (
    <Card sx={{borderRadius: '15px',opacity: '0.8'}}>
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
        <Box>
        <Grid container spacing={20}>
          <Grid item xs={12} md={4} lg={3}>
            <Grow in={true}>
            <Card
                sx={{
                  width: 200,
                  height: 200,
                  backgroundColor: '#D1E9FC',
                  borderRadius: '12px',
                  textAlign: 'center',
                  '&:hover': {
                    backgroundColor: '#79c2fc',
                    CSSTransition: '0.8s',
                    opacity: [0.9, 0.8, 0.7]
                  },
                  ':hover': {
                    boxShadow: 20,
                    color: '#061B64'
                  }
                }}
              >
              <Typography variant="subtitle2" sx={{ opacity: 0.72 }} 
                style={{ transformOrigin: '0 0 0' }}
              >
                <h4>Avalible Jobs</h4>
              </Typography>
              <Typography variant="h4"><Counter start={0} end={500}/></Typography>
            </Card>
          </Grow>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            {...(true ? { timeout: 1000 } : {})}
          >
    <Card
      sx={{
        width: 200,
        height: 200,
        borderRadius: '12px',
        textAlign: 'center',
        backgroundColor: '#D0F2FF',
        '&:hover': {
          backgroundColor: '#68d3fc',
          opacity: [0.9, 0.8, 0.7],
        },
        ':hover': {
          boxShadow: 20,
          color: '#04297A'
        }
      }}
    >
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        <h4>Applied Jobs</h4>
      </Typography>
      <Typography variant="h4"><Counter start={0} end={10}/></Typography>
    </Card>
  </Grow>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
  <Grow
    in={true}
    style={{ transformOrigin: '0 0 0' }}
    {...(true ? { timeout: 1850 } : {})}
  >
    <Card
      sx={{
        width: 200,
        height: 200,
        borderRadius: '12px',
        textAlign: 'center',
        backgroundColor: '#FFF7CD',
        '&:hover': {
          backgroundColor: '#ffed87',
          opacity: [0.9, 0.8, 0.7],
        },
        ':hover': {
          boxShadow: 20,
          color: '#7A4F01'
        }
      }}
    >
     
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        <h4>Recommended Jobs</h4>
      </Typography>
      <Typography variant="h4"><Counter start={0} end={250}/></Typography>
    </Card>
  </Grow>
        </Grid>
        </Grid>
        </Box> 
        </Box>
   
</Card>
  )
}

export default UserPerformance