
import { Alert, Box, Button, Card, CardMedia, Grid, Grow, Link, List, ListItem, ListItemText, TextField, TextareaAutosize, Typography } from '@mui/material'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import InputComponent from '../../education/InputComponent';

const schema = z.object({
   position: z.string().min(3).max(20),
   comName: z.string().min(3).max(20),
   company: z.string().min(3).max(30),
   location: z.string().min(3).max(30),
   des1: z.string().min(5).max(50),
   duration: z.string().min(5).max(20),
   qualifications: z.string().min(3).max(20),
   additionalInformation: z.string().min(3).max(255),
   responsibilities: z.string().min(3).max(255),
   logo: z.string().min(3).max(5000),
   img1: z.string().min(5).max(5000)
 })

type FormData = z.infer<typeof schema>

function AddJob2() {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({ resolver: zodResolver(schema)}); 
    const onSubmit = (data: FieldValues) => {
        
        const savedId = localStorage.getItem('addJobId');
        if(savedId) { 
        const jobid = JSON.parse(savedId); 
 
        const newData = {...data, id: jobid};
        console.log(newData)
    //     axios.post('http://localhost:5000/api/application',  newData )
    //     .then(res => {
    //      console.log(res.data);
    //      localStorage.removeItem('jobCardId');}
    //    )
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
            <InputComponent Md={15} label={'Position'} objRef={register('position')} error={errors.position?.message}/>
            <InputComponent Md={15} label={'Company Name'} objRef={register('comName')} error={errors.comName?.message}/>
            <InputComponent Md={15} label={'About Company'} objRef={register('company')} error={errors.company?.message}/>
            <InputComponent Md={15} label={'Company Location'} objRef={register('location')} error={errors.location?.message}/>
            <InputComponent Md={15} label={'Description'} objRef={register('des1')} error={errors.des1?.message}/>
            <InputComponent Md={15} label={'Duration'} objRef={register('duration')} error={errors.duration?.message}/>
            <InputComponent Md={15} label={'Qualifications'} objRef={register('qualifications')} error={errors.qualifications?.message}/>
            <InputComponent Md={15} label={'AdditionalInformation'} objRef={register('additionalInformation')} error={errors.additionalInformation?.message}/>
            <InputComponent Md={15} label={'Image Url'} objRef={register('img1')} error={errors.img1?.message}/>
            <InputComponent Md={15} label={'Logo Url'} objRef={register('logo')} error={errors.logo?.message}/>
            <InputComponent Md={15} label={'Responsibilities'} objRef={register('responsibilities')} error={errors.responsibilities?.message}/>
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