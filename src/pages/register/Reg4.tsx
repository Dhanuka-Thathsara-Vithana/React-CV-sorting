import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import regBack from './assets/Registration.png'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import InputComponent from '../education/InputComponent';
import { useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const schema = z.object({
    password: z.string().min(5).max(20),
    confirmPassword: z.string().min(5).max(20)
  })
  .refine((data) => data.password === data.confirmPassword, {
      message: 'Password do not match',
      path: ["confirmPassword"]
  });
  
  type FormData = z.infer<typeof schema>

const styles = {
    paperContainer: {
        backgroundImage: `url(${regBack})`
    }
};

function Reg4() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({ resolver: zodResolver(schema)});
    const onSubmit = (password: FieldValues) => {
       console.log(password);
       localStorage.setItem('formData3', JSON.stringify(password));
  
       navigate('/reg/reg5') 
     };

  return (
<Paper style={styles.paperContainer}>
    <Grid height='60.8rem' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={6}>
       <Box paddingLeft='23rem' paddingTop='26rem'>
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
            sx={{ paddingLeft: '2.8rem',fontFamily: '-apple-system', fontStyle: 'italic', fontSize: '55px' ,display: { xs: 'none', sm: 'block' } }}
            >
            CarrierCompass
            </Typography>
            <Typography color='white' sx={{paddingTop: '1rem', fontSize: '20px'}}>
            Log in to apply for jobs and check your resume status
            </Typography>
       </Box>
    </Grid>
    <Grid item xs={6}>
    <form onSubmit={handleSubmit(onSubmit)}>
        <Box paddingLeft='6rem'  paddingTop='22rem' width='37rem'>
           <Typography
           sx={{ paddingLeft: '8rem',fontFamily: '-apple-system', fontSize: '40px' ,display: { xs: 'none', sm: 'block' } }}
           >
           Set Password
           </Typography>  
           <Box paddingTop='1.5rem'>
                <Grid container spacing={2} paddingTop='2rem'>
                    <InputComponent Md={15} label={'Enter Your Password'} objRef={register('password')} error={errors.password?.message}/>
                    <InputComponent Md={15} label={'Comfirm Password'} objRef={register('confirmPassword')} error={errors.confirmPassword?.message}/>
                </Grid>    
           </Box>
          
           <Box paddingTop='1.8rem' width='30rem'>
           <Button type='submit' endIcon={<NavigateNextIcon />} sx={{height: '2.8rem', borderRadius: '12px'}} variant="outlined" fullWidth >Next</Button>
           </Box>
        </Box> 
    </form>     
    </Grid>
   
  </Grid>
</Paper>  
  )
}

export default Reg4