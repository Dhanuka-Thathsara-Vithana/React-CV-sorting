import { Box, Button, Card, Grid, Grow, Typography } from '@mui/material'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InputComponent from '../../education/InputComponent';

const schema = z.object({
    title: z.string().min(3).max(30),
    des1: z.string().min(3).max(20),
    des2: z.string().min(3).max(50),
    image: z.string().min(5).max(5000),
})

type FormData = z.infer<typeof schema>

const baseUrl = import.meta.env.VITE_API_BASE_URL;

function AddJob() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema)}); 
    const pubDate = new Date().toLocaleDateString();
    const onSubmit = (data: FieldValues) => {
      
        const allData = {...data, pubDate}
        console.log(allData)
        axios.post(`${baseUrl}/api/jobCard`,  allData )
        .then(res => {
          localStorage.setItem('addJobId', JSON.stringify(res.data));
          navigate('/com/newjob2')}
       )
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
        <InputComponent Md={15} label={'Title'} objRef={register('title')} error={errors.title?.message}/>
        <InputComponent Md={15} label={'Full/Part Time'} objRef={register('des1')} error={errors.des1?.message}/>
        <InputComponent Md={15} label={'small description'} objRef={register('des2')} error={errors.des2?.message}/>
        <InputComponent Md={15} label={'Image Url'} objRef={register('image')} error={errors.image?.message}/>
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

export default AddJob