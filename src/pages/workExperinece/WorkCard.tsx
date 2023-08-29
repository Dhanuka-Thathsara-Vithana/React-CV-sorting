import { Box, Button, Card, CardMedia, Checkbox, FormControlLabel, Grid, Link, List, ListItem, ListItemText, TextField, TextareaAutosize, Typography } from '@mui/material'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

function WorkCard() {
  return (
    <Card sx={{
        alignItems: 'center',
        paddingLeft: '2rem',
         borderRadius: '15px'
       }}>
        <Box p={1} width='740px' >
           <Typography variant='subtitle1'>
             Fields marked with * are required.
           </Typography>
           <Grid container spacing={2} paddingTop='2rem'>
               <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                  <TextField label='Title' sx={{ color: 'black'}}  size="small" fullWidth />
               </Grid>
               <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                  <TextField label='Company' sx={{ color: 'black'}}  size="small" fullWidth/>
               </Grid>
               <Grid sx={{ padding: '1rem' }} item xs={6} md={15}>
                  <TextField label='Office Location' sx={{ color: 'black'}}  size="small" fullWidth/>
               </Grid>
               <Grid sx={{ padding: '1rem' }} item xs={6} md={15}>
               <Typography paddingTop='1rem' >
               Let the company know about your interest working there
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
               <FormControlLabel control={<Checkbox />} label="I currently work here" />
               </Grid>
               <Grid item xs={6} md={1.7} >
                 <Button variant="outlined">cancel</Button>
               </Grid>
               <Grid item xs={6} md={1.5}>
                 <Button  variant="contained" sx={{ width: '95px'}}>Save</Button>
               </Grid>
           </Grid>
        </Box>   
       </Card>
  )
}

export default WorkCard