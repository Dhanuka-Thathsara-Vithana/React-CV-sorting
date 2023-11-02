import { Alert, Box, Button, Card, CardMedia, Grid, Grow, Link, List, ListItem, ListItemText, TextField, TextareaAutosize, Typography } from '@mui/material'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InputComponent from '../../education/InputComponent';

const schema = z.object({
    Title: z.string().min(3).max(30),
    Des1: z.string().min(3).max(20),
    Des2: z.string().min(3).max(50),
    message: z.string().min(5).max(500),
    Image: z.string().min(5).max(5000)
  })
 
type FormData = z.infer<typeof schema>
 
function AddJob() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({ resolver: zodResolver(schema)}); 
    const onSubmit = (data: FieldValues) => {
        console.log(data)
        axios.post('http://localhost:5000/api/jobCard',  data )
        .then(res => {
         console.log(res.data);
         navigate('com/newjob2')}
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
           <h2> Job information</h2> 
         </Typography>
         <Box paddingTop='1rem'>
         <Typography variant='subtitle1'>
            Fields marked with * are required.
         </Typography>
         </Box>
         <Grid container spacing={2} paddingTop='2rem'>
             <InputComponent Md={15} label={'Title'} objRef={register('Title')} error={errors.Title?.message}/>
             <InputComponent Md={15} label={'Full/Part Time'} objRef={register('Des1')} error={errors.Des1?.message}/>
             <InputComponent Md={15} label={'small description'} objRef={register('Des2')} error={errors.Des2?.message}/>
             <InputComponent Md={15} label={'Image Url'} objRef={register('Image')} error={errors.Image?.message}/>
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
                 Next
                </Button>
            </Box>    
          </Box>
        </form>   
      </Grow>       
       </Card>
  )
}

export default AddJob