import { Box, Button, Card, CardMedia, Checkbox, FormControlLabel, Grid, Grow, Link, List, ListItem, ListItemText, TextField, TextareaAutosize, Typography, Zoom } from '@mui/material'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import CardComponent from './CardComponent';
import EduDatePicker from './DatePicker';

import axios from 'axios';
import { FieldValues, useForm } from 'react-hook-form';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';

interface Props {
  handelClick: () => void
}

function EduCard({handelClick}: Props) {
  const [fromDate, setFromDate] = useState<Dayjs | null>(null)
  const [toDate, setToDate] = useState<Dayjs | null>(null)
  
  const handelFrom = (newValue: Dayjs | null) => {
      setFromDate(newValue);
    
  }

  const handelTo = (newValue: Dayjs | null) => {
    setToDate(newValue);
   
  }

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>(); 
  const onSubmit = (data: FieldValues) => {
       if(fromDate) {
         const from = fromDate.toString()
         const to = toDate.toString() 
         const newData = {...data, from, to}
         console.log(newData);
      axios.post('http://localhost:5000/api/education', newData )
      .then(res => 
       console.log(res.data) )
       }
       
    
      }
    console.log(fromDate);
return (
    <Card sx={{
        alignItems: 'center',
        paddingLeft: '2rem'
       }}>
         <form onSubmit={handleSubmit(onSubmit)}>
        <Box p={1} width='740px' sx={{borderRadius: '15px'}}>
           <Typography variant='subtitle1'>
             Fields marked with * are required.
           </Typography>
           <Grid container spacing={2} paddingTop='2rem'>
               <CardComponent Md={15} label={'Institution'}  objRef={register('Institution')}/>
               <CardComponent Md={6} label={'Major'} objRef={register('Major')} />
               <CardComponent Md={6} label={'Degree'} objRef={register('Degree')} />

               <Grid sx={{ padding: '1rem' }} item xs={6} md={15}>
               <Typography paddingTop='1rem' >
                 Description
               </Typography>
               
               <TextField
                  { ...register('Description')}
                  id='Description' 
                  multiline
                  rows={4}
                  InputProps={{
                    style: {
                        borderRadius: "10px",
                        fontFamily: "Roboto"
                    }}}
                //  defaultValue="Default Value"
                  fullWidth
                />
               </Grid>
               <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                  <EduDatePicker label={'From'} handelChange={handelFrom}/>
               </Grid>
               <Grid sx={{ padding: '1rem' }} item xs={6} md={6}>
                  <EduDatePicker label={'To'} handelChange={handelTo}/>
               </Grid>
               <Grid item xs={6} md={15}>
               <FormControlLabel control={<Checkbox 
                  { ...register('Check')}
                  id='Check' 
               />} label="I currently attend" />
               </Grid>
               <Grid item xs={6} md={1.7} >
                 <Button onClick={handelClick}  sx={{borderRadius: '12px'}} variant="outlined">cancel</Button>
               </Grid>
               <Grid item xs={6} md={1.5}>
                 <Button type='submit'  variant="contained" sx={{ width: '95px',borderRadius: '12px'}}>Save</Button>
               </Grid>
           </Grid>
        </Box>
         </form>
       </Card>
  )
}

export default EduCard