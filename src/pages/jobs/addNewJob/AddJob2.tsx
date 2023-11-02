
import { Alert, Box, Button, Card, CardMedia, Grid, Grow, Link, List, ListItem, ListItemText, TextField, TextareaAutosize, Typography } from '@mui/material'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

const schema = z.object({
   Position: z.string().min(3).max(20),
   ComName: z.string().min(3).max(20),
   Company: z.string().min(3).max(30),
  Location: z.string().min(3).max(30),
  Des1: z.string().min(5).max(50),
   Duration: z.string().min(5).max(20),
  linkedin: z.string().min(3).max(20),
   facebook1: z.string().min(3).max(255),
   message: z.string().min(5).max(500)
 })

type FormData = z.infer<typeof schema>

function AddJob2() {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({ resolver: zodResolver(schema)}); 
    const onSubmit = (data: FieldValues) => {
        console.log(data)
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
              <Grid sx={{ padding: '1rem' }} item xs={6} md={12} >
                 <TextField InputProps={{
                     style: {
                         borderRadius: "10px",
                         fontFamily: "Roboto"
                     }}}  { ...register('Position')}
                   id='Position' label='First Name' sx={{ color: 'black'}}  size="small" fullWidth />
                   {errors.Position && 
                       <Alert severity="error">{errors.Position.message}</Alert>
                   }
              </Grid>
              <Grid sx={{ padding: '1rem' }} item xs={6} md={12} >
                 <TextField InputProps={{
                     style: {
                         borderRadius: "10px",
                         fontFamily: "Roboto"
                     }}} { ...register('ComName')}
                   id='ComName' label='Last Name' sx={{ color: 'black'}}  size="small" fullWidth/>
                   {errors.ComName && 
                       <Alert severity="error">{errors.ComName.message}</Alert>
                   }
              </Grid>
              <Grid sx={{ padding: '1rem' }} item xs={6} md={12}>
                 <TextField InputProps={{
                     style: {
                         borderRadius: "10px",
                         fontFamily: "Roboto"
                     }}} { ...register('Company')}
                   id='Company' label='About Company' sx={{ color: 'black'}}  size="small" fullWidth/>
                   {errors.Company && 
                       <Alert severity="error">{errors.Company.message}</Alert>
                   }
              </Grid>
              <Grid sx={{ padding: '1rem' }} item xs={6} md={12}>
                 <TextField InputProps={{
                     style: {
                         borderRadius: "10px",
                         fontFamily: "Roboto"
                     }}} { ...register('Location')}
                   id='Location' label='Company Location' sx={{ color: 'black'}}  size="small" fullWidth/>
                   {errors.Location && 
                       <Alert severity="error">{errors.Location.message}</Alert>
                   }
              </Grid>
              <Grid sx={{ padding: '1rem' }} item xs={6} md={12}>
                 <TextField InputProps={{
                     style: {
                         borderRadius: "10px",
                         fontFamily: "Roboto"
                     }}} { ...register('Des1')}
                   id='Des1' label='Title' sx={{ color: 'black'}}  size="small" fullWidth/>
                   {errors.Des1 && 
                       <Alert severity="error">{errors.Des1.message}</Alert>
                   }
              </Grid>
              <Grid sx={{ padding: '1rem' }} item xs={6} md={12}>
                 <TextField InputProps={{
                     style: {
                         borderRadius: "10px",
                         fontFamily: "Roboto"
                     }}} { ...register('Duration')}
                   id='Duration' label='Duration Number' sx={{ color: 'black'}}  size="small" fullWidth/>
                   {errors.Duration && 
                       <Alert severity="error">{errors.Duration.message}</Alert>
                   }
              </Grid>
              <Grid sx={{ padding: '1rem' }} item xs={6} md={12}>
                 <TextField InputProps={{
                     style: {
                         borderRadius: "10px",
                         fontFamily: "Roboto"
                     }}} { ...register('Description')}
                   id='Description' label='Description Number' sx={{ color: 'black'}}  size="small" fullWidth/>
                   {errors.Description && 
                       <Alert severity="error">{errors.Description.message}</Alert>
                   }
              </Grid>
              <Grid sx={{ padding: '1rem' }} item xs={6} md={12}>
                 <TextField InputProps={{
                     style: {
                         borderRadius: "10px",
                         fontFamily: "Roboto"
                     }}} { ...register('Qualifications')}
                   id='Qualifications' label='Qualifications Number' sx={{ color: 'black'}}  size="small" fullWidth/>
                   {errors.Qualifications && 
                       <Alert severity="error">{errors.Qualifications.message}</Alert>
                   }
              </Grid>
              <Grid sx={{ padding: '1rem' }} item xs={6} md={12}>
                 <TextField InputProps={{
                     style: {
                         borderRadius: "10px",
                         fontFamily: "Roboto"
                     }}} { ...register('AdditionalInformation')}
                   id='AdditionalInformation' label='AdditionalInformation' sx={{ color: 'black'}}  size="small" fullWidth/>
                   {errors.AdditionalInformation && 
                       <Alert severity="error">{errors.AdditionalInformation.message}</Alert>
                   }
              </Grid>
          </Grid>
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

export default AddJob2