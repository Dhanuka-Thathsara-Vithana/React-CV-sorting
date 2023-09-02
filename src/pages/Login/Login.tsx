import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import regBack from './assets/Registration.png'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import InputComponent from '../education/InputComponent';
import { useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

const schema = z.object({
    email: z.string().email("This is not a valid email."),
    password: z.string().min(3)
  });

  type FormData = z.infer<typeof schema>
  

const styles = {
    paperContainer: {
        backgroundImage: `url(${regBack})`
    }
};

function Reg2() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({ resolver: zodResolver(schema)});
    const onSubmit = (data: FieldValues) => {
     console.log(data)
     axios.post('http://localhost:5000/api/auth',  data )
     .then(res => {
      console.log(res.data);
      {if(res.data) 
       { 
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/dashboard');}} }
    )
     console.log(data)
    navigate('') 
   }

  return (
<Paper style={styles.paperContainer}>
    <Grid height='60.8rem' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={6}>
       <Box paddingLeft='23rem' paddingTop='23rem'>
           <Typography
            color='white'
            component="div"
            sx={{ paddingLeft: '7rem',fontFamily: '-apple-system', fontStyle: 'italic', fontSize: '35px' ,display: { xs: 'none', sm: 'block' } }}
            >
            Let’s Register!
            </Typography> 
           <Typography
            color='white'
            component="div"
            sx={{paddingTop: '1rem', paddingLeft: '2.8rem',fontFamily: '-apple-system', fontStyle: 'italic', fontSize: '55px' ,display: { xs: 'none', sm: 'block' } }}
            >
            CarrierCompass
            </Typography>
       </Box>
    </Grid>
    <Grid item xs={6}>
    <form onSubmit={handleSubmit(onSubmit)}>
        <Box paddingLeft='6rem'  paddingTop='15rem' width='40rem'>
           <Typography
           sx={{ paddingLeft: '9rem',fontFamily: '-apple-system', fontSize: '40px' ,display: { xs: 'none', sm: 'block' } }}
           >
           Personal Details
           </Typography>  
           <Box paddingTop='1.5rem'>
                <Grid container spacing={2} paddingTop='2rem'>
                    <InputComponent Md={15} label={'Email'} objRef={register('email')} error={errors.email?.message}/>
                    <InputComponent Md={15} label={'Password'} objRef={register('password')} error={errors.password?.message}/>
                </Grid>    
           </Box>
          
           <Box paddingTop='1.8rem' width='33rem'>
                <Button type='submit' endIcon={<PersonAddAltIcon />} sx={{height: '2.8rem', borderRadius: '12px'}} variant="outlined" fullWidth >Login</Button>
           </Box>
        </Box> 
    </form>     
    </Grid>
   
  </Grid>
</Paper>  
  )
}

export default Reg2