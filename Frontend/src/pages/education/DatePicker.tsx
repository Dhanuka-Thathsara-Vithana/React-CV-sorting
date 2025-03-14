import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface Props {
    label: string,
    handelChange: (newValue: Dayjs | null) => void;
}

export default function EduDatePicker({label, handelChange}: Props) {
  const [value] = React.useState<Dayjs | null>(dayjs('2022-04-20'));
   console.log(value);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      
        <DatePicker
          sx={{borderRadius: '15px'}}
          label={label}
          value={value}
         onChange={(newValue) => handelChange(newValue)}
        //  { ...duration}
        //  id={Id}
        />
  
    </LocalizationProvider>
  );
}
