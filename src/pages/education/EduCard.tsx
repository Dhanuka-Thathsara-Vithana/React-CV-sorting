import { Box, Button, Card, CardMedia, Checkbox, FormControlLabel, Grid, Grow, Link, List, ListItem, ListItemText, TextField, TextareaAutosize, Typography, Zoom } from '@mui/material'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import EduCardComponent from './EduCardComponent';

function EduCard() {
  return (
    <Card sx={{
        alignItems: 'center',
        paddingLeft: '2rem'
       }}>
       
        <Box p={1} width='740px' sx={{borderRadius: '15px'}}>
           <Typography variant='subtitle1'>
             Fields marked with * are required.
           </Typography>
           <Grid container spacing={2} paddingTop='2rem'>
               <EduCardComponent Md={15} label={'Institution'}/>
               <EduCardComponent Md={6} label={'Major'}/>
               <EduCardComponent Md={6} label={'Degree'}/>

               <Grid sx={{ padding: '1rem' }} item xs={6} md={15}>
               <Typography paddingTop='1rem' >
                 Description
               </Typography>
               
               <TextField 
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                //  defaultValue="Default Value"
                  fullWidth
                />
               </Grid>
               <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                 <Typography>From</Typography>
                  <DatePicker/>
               </Grid>
               <Grid sx={{ padding: '1rem' }} item xs={6} md={6}>
                  <Typography>To</Typography>
                  <DatePicker/>
               </Grid>
               <Grid item xs={6} md={15}>
               <FormControlLabel control={<Checkbox />} label="I currently attend" />
               </Grid>
               <Grid item xs={6} md={1.7} >
                 <Button sx={{borderRadius: '12px'}} variant="outlined">cancel</Button>
               </Grid>
               <Grid item xs={6} md={1.5}>
                 <Button  variant="contained" sx={{ width: '95px',borderRadius: '12px'}}>Save</Button>
               </Grid>
           </Grid>
        </Box>
     
       </Card>
  )
}

export default EduCard