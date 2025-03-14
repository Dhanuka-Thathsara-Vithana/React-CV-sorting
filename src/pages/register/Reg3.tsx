import { Box, Button, FormControlLabel, Grid, InputLabel, MenuItem, Paper, RadioGroup, Select, Typography } from '@mui/material'
import regBack from './assets/Registration.png'
import { useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import Radio from '@mui/material/Radio';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const styles = {
    paperContainer: {
        backgroundImage: `url(${regBack})`
    }
};



function Reg3() {
    const [status, setStatus] = useState('')
    // Define the FormData interface
    interface FormData {
      field: string;
    }
    
    const { register, handleSubmit } = useForm<FormData>();
    const navigate = useNavigate();

    const onSubmit = (education: FieldValues) => {
        const edu = {...education, status}
        localStorage.setItem('formData2', JSON.stringify(edu));
    
        navigate('/reg/reg4') 
    }

    const handelBack = () => {
        navigate('/reg/reg2')
      }

  return (
<Paper style={styles.paperContainer}>
    <Grid height='60.8rem' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={6}>
       <Box paddingLeft='23rem' paddingTop='26rem'>
           <Typography
            color='white'
            component="div"
            sx={{ paddingLeft: '2.8rem',fontFamily: '-apple-system', fontStyle: 'italic', fontSize: '55px' ,display: { xs: 'none', sm: 'block' } }}
            >
            CarrierCompass
            </Typography>
            <Typography color='white' sx={{paddingTop: '1rem', fontSize: '20px'}}>
            Log in to apply for jobs and check your resume status
            </Typography>
       </Box>
    </Grid>
    <Grid item xs={6}>
    <form onSubmit={handleSubmit(onSubmit)}>
        <Box paddingLeft='6rem'  paddingTop='15rem' width='40rem'>
           <Typography
           sx={{ paddingLeft: '9rem',fontFamily: '-apple-system', fontSize: '40px' ,display: { xs: 'none', sm: 'block' } }}
           >
           Education Details
           </Typography>  
           <Box paddingTop='1.5rem' paddingLeft='3rem'>
              <Typography>Are you a graduate/ undergraduate?</Typography>
                <RadioGroup
                    onChange={(e) => setStatus(e.target.value)}
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    sx={{paddingLeft: '2.5rem', paddingTop: '1rem'}}
                    >
                        <FormControlLabel value="Graduate" control={<Radio />} label="Graduate" />
                        <FormControlLabel value="Undergraduate" control={<Radio />} label="Undergraduate" />
                </RadioGroup>
           </Box>
           <Box paddingLeft='3rem' paddingTop='2rem'>
            <InputLabel id="demo-simple-select-label">Select your field of study</InputLabel>
                    <Select
                        { ...register('field')} id='field'
                        labelId="demo-simple-select-label"
                        label="Select your field of study"
                        sx={{width: '28rem'}}
                    >
                        <MenuItem value={'Software Engineering'}>Software Engineering</MenuItem>
                        <MenuItem value={'Cyber Security'}>Cyber Security</MenuItem>
                        <MenuItem value={'Computer Science'}>Computer Science</MenuItem>
                    </Select>
           </Box>
           <Box paddingTop='3rem' width='31rem' paddingLeft='3rem'>
                <Button type='submit' endIcon={<NavigateNextIcon />} sx={{height: '2.8rem', borderRadius: '12px'}} variant="outlined" fullWidth >Next</Button>
           </Box>
           <Box paddingTop='1.8rem'>
                <Button onClick={handelBack} startIcon={<ArrowBackIosNewIcon />} sx={{height: '2.8rem', borderRadius: '12px'}} variant="outlined" fullWidth >Back</Button>
           </Box>
        </Box> 
    </form>     
    </Grid>
   
  </Grid>
</Paper>  
  )
}

export default Reg3