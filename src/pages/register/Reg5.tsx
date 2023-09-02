import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import regBack from './assets/Registration.png'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import InputComponent from '../education/InputComponent';
import { useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import axios from 'axios';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const styles = {
    paperContainer: {
        backgroundImage: `url(${regBack})`
    }
};

function Reg5() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>();
    const onSubmit = (data: FieldValues) => {
      const savedFormData1 = localStorage.getItem('formData1');
      const savedFormData2 = localStorage.getItem('formData2');
      const savedFormData3 = localStorage.getItem('formData3');
       if(savedFormData1 && savedFormData2 && savedFormData3 ){
        const parsedFormData1 = JSON.parse(savedFormData1);
        const password = JSON.parse(savedFormData2);
        const education = JSON.parse(savedFormData3);
         
        const data = {
          ...password,
          ...education,
          ...parsedFormData1
        }
        
         console.log(data);
        axios.post('http://localhost:5000/api/users',  data )
        .then(res => {
         console.log(res.data);
         localStorage.removeItem('formData1');
         localStorage.removeItem('formData2');
         localStorage.removeItem('formData3');
         }
       )
       }
     };

  return (
<Paper style={styles.paperContainer}>
    <Grid height='60.8rem' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={6}>
       <Box paddingLeft='23rem' paddingTop='26rem'> 
           <Typography
            color='white'
            component="div"
            sx={{ paddingLeft: '2.8rem',fontFamily: '-apple-system', fontStyle: 'italic', fontSize: '55px' ,display: { xs: 'none', sm: 'block' } }}
            >
            CarrierCompass
            </Typography>
            <Typography color='white' sx={{paddingTop: '1rem', fontSize: '20px'}}>
             Join with us to find and apply for the most suitabe jobs for you
            </Typography>
       </Box>
    </Grid>
    <Grid item xs={6}>
    <form onSubmit={handleSubmit(onSubmit)}>
        <Box paddingLeft='6rem'  paddingTop='22rem' width='37rem'>
           <Typography
           sx={{ paddingLeft: '4rem',fontFamily: '-apple-system', fontSize: '40px' ,display: { xs: 'none', sm: 'block' } }}
           >
           Your Profile has been 
           </Typography>
           <Typography
           sx={{ paddingLeft: '10rem',fontFamily: '-apple-system', fontSize: '40px' ,display: { xs: 'none', sm: 'block' } }}
           >
          created!
           </Typography>
          
           <Box paddingTop='4rem' width='30rem'>
           <Button type='submit' endIcon={<PersonAddIcon />} sx={{height: '2.8rem', borderRadius: '12px'}} variant="outlined" fullWidth >Submit</Button>
           </Box>
        </Box> 
    </form>     
    </Grid>
   
  </Grid>
</Paper>  
  )
}

export default Reg5