import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import regBack from './assets/Registration.png'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import InputComponent from '../education/InputComponent';
import { useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const schema = z.object({
    fName: z.string().min(3),
    lName: z.string().min(3),
    email: z.string().email("This is not a valid email."),
    telephone: z.string().min(9).max(15),
    age: z.string().min(1).max(3)
  });
  
  type FormData = z.infer<typeof schema>
  

const styles = {
    paperContainer: {
        backgroundImage: `url(${regBack})`
    }
};

function Reg2() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema)});
    const onSubmit = (data: FieldValues) => {
    // Save form data to localStorage whenever it changes
        localStorage.setItem('formData1', JSON.stringify(data));
        console.log(data)
       navigate('/reg/reg3') 
    }

    const handelBack = () => {
      navigate('/')
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
            <Typography color='white' sx={{paddingTop: '1rem', fontSize: '20px'}}>
            Log in to apply for jobs and check your resume status
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
                    <InputComponent Md={15} label={'First Name'} objRef={register('fName')} error={errors.fName?.message}/>
                    <InputComponent Md={15} label={'Last Name'} objRef={register('lName')} error={errors.lName?.message}/>
                    <InputComponent Md={15} label={'Email Name'} objRef={register('email')} error={errors.email?.message}/>
                    <InputComponent Md={15} label={'Telephone'} objRef={register('telephone')} error={errors.telephone?.message}/>
                    <InputComponent Md={15} label={'Age'} objRef={register('age')} error={errors.age?.message}/>
                </Grid>    
           </Box>
          
           <Box paddingTop='1.8rem' width='33rem'>
                <Button type='submit' endIcon={<PersonAddAltIcon />} sx={{height: '2.8rem', borderRadius: '12px'}} variant="outlined" fullWidth >Submit</Button>
           </Box>
           <Box paddingTop='1.8rem'>
                <Button onClick={handelBack} startIcon={<ArrowBackIosNewIcon />} sx={{height: '2.8rem', borderRadius: '12px'}} variant="outlined" fullWidth >Back</Button>
           </Box>
        </Box> 
    </form>     
    </Grid>
   
  </Grid>
</Paper>  
  )
}

export default Reg2