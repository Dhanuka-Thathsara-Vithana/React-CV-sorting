import { Box, Button, Card, CardActions, CardMedia, Checkbox, FormControlLabel, Grid, Grow, Link, List, ListItem, ListItemText, TextField, TextareaAutosize, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

interface Props{
    id: number,
    fName: string,
    lName: string,
    field: string,
    age: number,
    handelClickCV: (id: number) => void
    handelClickView: (id: number) => void
}

function CandiCard({id, fName, lName, field , age, handelClickCV,handelClickView }: Props) {
    return (
      <Grow in={true} {...(true ? { timeout: 1000 } : {})} style={{ transformOrigin: '0 0 0' }}>
      <Card sx={{
          alignItems: 'center',
          paddingLeft: '2rem',
          background: '#e1f1fd',
          borderRadius: '15px'
         }}>
          <Box p={1} width='640px'>
             <Grid container spacing={1} paddingTop='2rem'>
                 <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                    <Typography paddingTop='1rem' >Name</Typography>
                    <Typography>{fName+' '+lName}</Typography>
                 </Grid>
                 <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                     <Typography paddingTop='1rem' >age</Typography>
                     <Typography>{age}</Typography>
                 </Grid>
                 <Grid sx={{ padding: '1rem' }} item xs={6} md={15}>
                     <Typography paddingTop='1rem' >Field</Typography>
                     <Typography>{field}</Typography>
                 </Grid>
                 <Grid sx={{ padding: '1rem' }} item xs={6} md={15}>
                 <CardActions disableSpacing>
      <Grid paddingLeft={1.5} container spacing={2.5}>
          <Grid item alignContent='end'>
            <Button
              
             onClick={() => handelClickCV(id)}
             sx={{
              bgcolor: '#09bd0c'+ ' !important', 
                '&:hover': {
                    backgroundColor: '#4EF037',
                    opacity: [0.9, 0.8, 0.7]
                  },
                color: 'white', width: '120px' }}>View CV</Button>
          </Grid>
          <Grid item alignContent='end'>
            <Button
              
             onClick={() => handelClickView(id)}
             sx={{
              bgcolor: '#09bd0c'+ ' !important', 
                '&:hover': {
                    backgroundColor: '#4EF037',
                    opacity: [0.9, 0.8, 0.7]
                  },
                color: 'white', width: '160px' }}>View Profile</Button>
          </Grid>
        </Grid>
      </CardActions>
                 </Grid>
             </Grid>
          </Box>   
         </Card>
         </Grow>
    )
  }
  
  export default CandiCard