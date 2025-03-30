import { Box, Button, Card, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import InputComponent from './InputComponent';
import EduDatePicker from './DatePicker';

import { FieldValues, useForm } from 'react-hook-form';

interface FormData {
  Institution: string;
  Major: string;
  Degree: string;
  Description: string;
}

import { Dayjs } from 'dayjs';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useCreateEducation, EduProps } from '../../services/EducationService';

interface Props {
  handelClick: () => void
}

function EduCard({handelClick}: Props) {
  const [fromDate, setFromDate] = useState<Dayjs | null>(null)
  const [toDate, setToDate] = useState<Dayjs | null>(null)
  const {user} = useAuth();
  const userID = user?._id;
  const handelFrom = (newValue: Dayjs | null) => {
      setFromDate(newValue);
    
  }

  const handelTo = (newValue: Dayjs | null) => {
    setToDate(newValue);
   
  }
  const createEduMutation = useCreateEducation({} as EduProps);

  const { register, handleSubmit } = useForm<FormData>(); 
  const onSubmit = (data: FieldValues) => {
    if(fromDate) {
      const from = fromDate.toString();
      const to = toDate ? toDate.toString() : null;
      
      // Explicitly include all required properties from EduProps
      const newData: EduProps = {
        Institution: data.Institution,
        Major: data.Major,
        Degree: data.Degree,
        Description: data.Description,
        from,
        to,
        userID
      };
      console.log(newData);
      createEduMutation.mutate(newData);
    }
  }
    

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
               <InputComponent Md={15} label={'Institution'} objRef={register('Institution')} error={''}/>
               <InputComponent Md={6} label={'Major'} objRef={register('Major')} error={''}/>
               <InputComponent Md={6} label={'Degree'} objRef={register('Degree')} error={''}/>

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