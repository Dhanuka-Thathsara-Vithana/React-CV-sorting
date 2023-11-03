
import { Alert, Box, Button, Card, CardMedia, Grid, Grow, Link, List, ListItem, ListItemText, TextField, TextareaAutosize, Typography } from '@mui/material'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import File from './File';

const schema = z.object({
   fName: z.string().min(3).max(20),
   lName: z.string().min(3).max(20),
   age: z.string().min(1).max(3),
   email: z.string().min(3).max(30).email(),
  confirmEmail: z.string().min(3).max(30),
  residence: z.string().min(5).max(50),
   phone: z.string().min(5).max(20),
  linkedin: z.string().min(3).max(20),
   facebook1: z.string().min(3).max(255),
   message: z.string().min(5).max(500)
 })
 .refine((data) => data.email === data.confirmEmail, {
   message: 'email do not match',
   path: ["confirmEmail"]
});

type FormData = z.infer<typeof schema>

function JobApplyForm() {

   const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({ resolver: zodResolver(schema)}); 
   const onSubmit = (data: FieldValues) => {

       const savedId = localStorage.getItem('jobCardId');
       if(savedId) { const jobid = JSON.parse(savedId); 

       const newData = {...data, jobId: jobid};
      
       axios.post('http://localhost:5000/api/application',  newData )
       .then(res => {
        console.log(res.data);
        localStorage.removeItem('jobCardId');}
      )
       }
   }

  return (
    <Card sx={{
        alignItems: 'center',
        paddingLeft: '2rem',
        width: '70rem'
       }}>
      <Grow in={true}>
       <form onSubmit={handleSubmit(onSubmit)}>
        <Box p={1} width='740px'>
         <Typography >
           <h2> Personal information</h2> 
         </Typography>
         <Box paddingTop='1rem'>
         <Typography variant='subtitle1'>
            Fields marked with * are required.
         </Typography>
         </Box>
         <Grid container spacing={2} paddingTop='2rem'>
             <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                <TextField InputProps={{
                    style: {
                        borderRadius: "10px",
                        fontFamily: "Roboto"
                    }}}  { ...register('fName')}
                  id='fName' label='First Name' sx={{ color: 'black'}}  size="small" fullWidth />
                  {errors.fName && 
                      <Alert severity="error">{errors.fName.message}</Alert>
                  }
             </Grid>
             <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                <TextField InputProps={{
                    style: {
                        borderRadius: "10px",
                        fontFamily: "Roboto"
                    }}} { ...register('lName')}
                  id='lName' label='Last Name' sx={{ color: 'black'}}  size="small" fullWidth/>
                  {errors.lName && 
                      <Alert severity="error">{errors.lName.message}</Alert>
                  }
             </Grid>
             <Grid sx={{ padding: '1rem' }} item xs={6} md={6}>
                <TextField InputProps={{
                    style: {
                        borderRadius: "10px",
                        fontFamily: "Roboto"
                    }}} { ...register('email')}
                  id='email' label='Email' sx={{ color: 'black'}}  size="small" fullWidth/>
                  {errors.email && 
                      <Alert severity="error">{errors.email.message}</Alert>
                  }
             </Grid>
             <Grid sx={{ padding: '1rem' }} item xs={6} md={6}>
                <TextField InputProps={{
                    style: {
                        borderRadius: "10px",
                        fontFamily: "Roboto"
                    }}} { ...register('confirmEmail')}
                  id='confirmEmail' label='Confirm Your Email' sx={{ color: 'black'}}  size="small" fullWidth/>
                  {errors.confirmEmail && 
                      <Alert severity="error">{errors.confirmEmail.message}</Alert>
                  }
             </Grid>
             <Grid sx={{ padding: '1rem' }} item xs={6} md={6}>
                <TextField InputProps={{
                    style: {
                        borderRadius: "10px",
                        fontFamily: "Roboto"
                    }}} { ...register('age')}
                  id='age' label='Age' sx={{ color: 'black'}}  size="small" fullWidth/>
                  {errors.age && 
                      <Alert severity="error">{errors.age.message}</Alert>
                  }
             </Grid>
             <Grid sx={{ padding: '1rem' }} item xs={6} md={6}>
                <TextField InputProps={{
                    style: {
                        borderRadius: "10px",
                        fontFamily: "Roboto"
                    }}} { ...register('residence')}
                  id='residence' label='Place of residence' sx={{ color: 'black'}}  size="small" fullWidth/>
                  {errors.residence && 
                      <Alert severity="error">{errors.residence.message}</Alert>
                  }
             </Grid>
             <Grid sx={{ padding: '1rem' }} item xs={6} md={6}>
                <TextField InputProps={{
                    style: {
                        borderRadius: "10px",
                        fontFamily: "Roboto"
                    }}} { ...register('phone')}
                  id='phone' label='Phone Number' sx={{ color: 'black'}}  size="small" fullWidth/>
                  {errors.phone && 
                      <Alert severity="error">{errors.phone.message}</Alert>
                  }
             </Grid>
         </Grid>
            <Typography paddingTop='2rem' paddingBottom='1rem'>
              On Our Web
            </Typography>
          <Grid container spacing={2}>
             <Grid sx={{ padding: '1rem' }} item xs={6} md={6}>
                <TextField InputProps={{
                    style: {
                        borderRadius: "10px",
                        fontFamily: "Roboto"
                    }}} { ...register('linkedin')}
                  id='linkedin' label='Linkedin' sx={{ color: 'black'}}  size="small" fullWidth/>
                  {errors.linkedin && 
                      <Alert severity="error">{errors.linkedin.message}</Alert>
                  }
             </Grid> 
             <Grid sx={{ padding: '1rem' }} item xs={6} md={6}>
                <TextField InputProps={{
                    style: {
                        borderRadius: "10px",
                        fontFamily: "Roboto"
                    }}} { ...register('facebook1')}
                  id='facebook1' label='Facebook' sx={{ color: 'black'}} size="small" fullWidth/>
                  {errors.facebook1 && 
                      <Alert severity="error">{errors.facebook1.message}</Alert>
                  }
             </Grid>
          </Grid>
             <Typography paddingTop='2rem'>
                Resume
             </Typography>
             <Box paddingTop='1rem'>
                <File/>
             </Box>
             <Typography paddingTop='2rem'>
              <h3> Message to Hiring Manager </h3>
             </Typography>
             <Typography paddingTop='1rem'>
             Let the company know about your interest working there
             </Typography>
             <TextField InputProps={{
                    style: {
                        borderRadius: "10px",
                        fontFamily: "Roboto"
                    }}}
                { ...register('message')}
                id='message'
                //id="outlined-multiline-static"
                multiline
                rows={4}
              //  defaultValue="Default Value"
                fullWidth
              />
            <Box paddingTop='2rem' paddingBottom='2rem'>
             <Button
                  type='submit'
                  variant="contained"
                  color="primary"
                  startIcon={<NorthEastIcon />}
                  sx={{
                    bgcolor: '#0000FF'+ ' !important', 
                '&:hover': {
                    backgroundColor: '#4EF037',
                    opacity: [0.9, 0.8, 0.7]
                  },
                color: 'white', width: '120px',
                    outline: 'false',
                    borderRadius: '40px'
                  }}
                >
                 Apply
                </Button>
            </Box>    
          </Box>
        </form>   
      </Grow>       
       </Card>
  )
}

export default JobApplyForm