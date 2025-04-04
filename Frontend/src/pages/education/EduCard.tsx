import { Box, Button, Card, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import InputComponent from './InputComponent';
import EduDatePicker from './DatePicker';

import { FieldValues, useForm } from 'react-hook-form';
import { Dayjs } from 'dayjs';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useAuth } from '../../context/AuthContext';
import { useCreateEducation, EduProps } from '../../services/EducationService';

interface FormData {
  Institution: string;
  Major: string;
  Degree: string;
  Description: string;
}

interface Props {
  handelClick: () => void;
}

function EduCard({ handelClick }: Props) {
  const [fromDate, setFromDate] = useState<Dayjs | null>(null);
  const [toDate, setToDate] = useState<Dayjs | null>(null);
  const { user } = useAuth();
  const userID = user?._id;

  const handelFrom = (newValue: Dayjs | null) => {
    setFromDate(newValue);
  };

  const handelTo = (newValue: Dayjs | null) => {
    setToDate(newValue);
  };

  const createEduMutation = useCreateEducation({} as EduProps);
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    if (!fromDate) {
      Swal.fire({
        title: 'Validation Error',
        text: 'Please select a From date',
        icon: 'warning',
        confirmButtonText: 'Ok',
        customClass: {
          popup: 'swal2-popup-custom',
        },
      });
      return;
    }

    const from = fromDate.toString();
    const to = toDate ? toDate.toString() : 'Present';

    const newData: EduProps = {
      Institution: data.Institution,
      Major: data.Major,
      Degree: data.Degree,
      Description: data.Description || '',
      from,
      to,
      userID,
    };

    createEduMutation.mutate(newData, {
      onSuccess: () => {
        Swal.fire({
          title: 'Success!',
          text: 'Education information has been saved',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
          customClass: {
            popup: 'swal2-popup-custom',
          },
        });
      },
      onError: (error) => {
            console.error("Submission error:", error);
            Swal.fire({
                title: "Error",
                text: "Failed to save education. Please check your internet connection and try again.",
                icon: "error",
            }) }
    });

    handelClick();
  };

  return (
    <Card sx={{ alignItems: 'center', paddingLeft: '2rem' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box p={1} width="740px" sx={{ borderRadius: '15px' }}>
          <Typography variant="subtitle1">Fields marked with * are required.</Typography>
          <Grid container spacing={2} paddingTop="2rem">
            <InputComponent Md={15} label={'Institution'} objRef={register('Institution')} error={''} />
            <InputComponent Md={6} label={'Major'} objRef={register('Major')} error={''} />
            <InputComponent Md={6} label={'Degree'} objRef={register('Degree')} error={''} />

            <Grid sx={{ padding: '1rem' }} item xs={6} md={15}>
              <Typography paddingTop="1rem">Description</Typography>
              <TextField
                {...register('Description')}
                id="Description"
                multiline
                rows={4}
                InputProps={{
                  style: {
                    borderRadius: '10px',
                    fontFamily: 'Roboto',
                  },
                }}
                fullWidth
              />
            </Grid>
            <Grid sx={{ padding: '1rem' }} item xs={6} md={6}>
              <EduDatePicker label={'From'} handelChange={handelFrom} />
            </Grid>
            <Grid sx={{ padding: '1rem' }} item xs={6} md={6}>
              <EduDatePicker label={'To'} handelChange={handelTo} />
            </Grid>
            <Grid item xs={6} md={15}>
              <FormControlLabel control={<Checkbox id="Check" />} label="I currently attend" />
            </Grid>
            <Grid item xs={6} md={1.7}>
              <Button onClick={handelClick} sx={{ borderRadius: '12px' }} variant="outlined">
                Cancel
              </Button>
            </Grid>
            <Grid item xs={6} md={1.5}>
              <Button type="submit" variant="contained" sx={{ width: '95px', borderRadius: '12px' }}>
                Save
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Card>
  );
}

export default EduCard;
