import { Box, Button, Card, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import { FieldValues, useForm } from 'react-hook-form';

interface FormData {
  Title: string;
  Company: string;
  OfficeLocation: string;
  Description: string;
  Check: boolean;
}

import { Dayjs } from 'dayjs';
import { useState } from 'react';
import InputComponent from '../education/InputComponent';
import EduDatePicker from '../education/DatePicker';
import { useAuth } from '../../context/AuthContext';

interface Props {
  handelClick: () => void
}

const baseUrl = import.meta.env.VITE_API_BASE_URL;

function WorkCard({handelClick}: Props) {
  const [fromDate, setFromDate] = useState<Dayjs | null>(null)
  const [toDate, setToDate] = useState<Dayjs | null>(null)
  const {user} = useAuth();
  const userID = user?._id;
  const handelFrom = (newValue: Dayjs | null) => {
      setFromDate(newValue);
  useForm<FormData>();
  }
  
  const handelTo = (newValue: Dayjs | null) => {
    setToDate(newValue);
   
  }

  const { register, handleSubmit } = useForm<FormData>(); 
  const onSubmit = (data: FieldValues) => {
       if(fromDate) {
        const from = fromDate.toString();
    
        const to = toDate ? toDate.toString() : null;
        
         const newData = {...data, from, to, userID};
         console.log(newData);
      axios.post(`${baseUrl}/api/work`, newData )
      .then(res => 
       console.log(res.data) )
       }
       
    
      }
      
  return (
    <Card sx={{
        alignItems: 'center',
        paddingLeft: '2rem',
         borderRadius: '15px'
       }}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Box p={1} width='740px' >
           <Typography variant='subtitle1'>
             Fields marked with * are required.
           </Typography>
           <Grid container spacing={2} paddingTop='2rem'>
              <InputComponent Md={6} label={'Title'}  objRef={register('Title')}/>
              <InputComponent Md={6} label={'Company'}  objRef={register('Company')}/>
              <InputComponent Md={15} label={'OfficeLocation'}  objRef={register('OfficeLocation')}/>

               <Grid sx={{ padding: '1rem' }} item xs={6} md={15}>
               <Typography paddingTop='1rem' >
               Let the company know about your interest working there
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
               />} label="I currently work here" />
               </Grid>
               <Grid item xs={6} md={1.7} >
                 <Button onClick={handelClick} variant="outlined">cancel</Button>
               </Grid>
               <Grid item xs={6} md={1.5}>
                 <Button
                 sx={{
                  bgcolor: '#09bd0c' + ' !important', 
                  '&:hover': {
                      backgroundColor: '#4EF037',
                      opacity: [0.9, 0.8, 0.7]
                    },
                  color: 'white', 
                  width: '120px'
                }} 
                 type='submit'  variant="contained">Save</Button>
               </Grid>
           </Grid>
        </Box> 
        </form>  
       </Card>
  )
}

export default WorkCard