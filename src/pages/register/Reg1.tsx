import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import regBack from './assets/Registration.png'
import GoogleIcon from '@mui/icons-material/Google';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useNavigate } from 'react-router-dom';

const styles = {
    paperContainer: {
        backgroundImage: `url(${regBack})`
    }
};

function Reg1() {
    const navigate = useNavigate();
    
    const createAccount = () => {
        navigate('reg2')
    }

  return (
<Paper style={styles.paperContainer}>
    <Grid height='60.8rem' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={6}>
       <Box paddingLeft='23rem' paddingTop='26rem'>
           <Typography
            color='white'
            component="div"
            sx={{ paddingLeft: '2.8rem',fontFamily: '-apple-system', fontStyle: 'italic', fontSize: '50px' ,display: { xs: 'none', sm: 'block' } }}
            >
            CarrierCompass
            </Typography>
            <Typography color='white' sx={{paddingTop: '1rem', fontSize: '20px'}}>
            Log in to apply for jobs and check your resume status
            </Typography>
       </Box>
    </Grid>
    <Grid item xs={6}>
        <Box paddingLeft='6rem'  paddingTop='25rem' width='40rem'>
           <Typography
           sx={{ paddingLeft: '9rem',fontFamily: '-apple-system', fontSize: '40px' ,display: { xs: 'none', sm: 'block' } }}
           >
           Let’s Register
           </Typography>  
           <Box paddingTop='1.5rem'>
                <Button endIcon={<GoogleIcon />} sx={{height: '2.8rem', borderRadius: '12px'}} variant="outlined" fullWidth >Sign Up with Google</Button>
           </Box>
          
           <Box paddingTop='1.8rem'>
                <Button onClick={createAccount} endIcon={<PersonAddAltIcon />} sx={{height: '2.8rem', borderRadius: '12px'}} variant="outlined" fullWidth >Create Your own Account</Button>
           </Box>
        </Box>  
    </Grid>
   
  </Grid>
</Paper>  
  )
}

export default Reg1