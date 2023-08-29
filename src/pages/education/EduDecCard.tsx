import { Box, Button, Card, CardMedia, Checkbox, FormControlLabel, Grid, Grow, Link, List, ListItem, ListItemText, TextField, TextareaAutosize, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

interface Props{
    id: string,
    institution: string,
    major: string,
    degree: string,
    description: string,
    to: string,
    from: string,
    handelClick: (id: string) => void
}

function EduDecCard({id, institution, major, degree, description, to , from, handelClick }: Props) {
  return (
    <Grow in={true} {...(true ? { timeout: 700 } : {})} style={{ transformOrigin: '0 0 0' }}>
    <Card sx={{
        alignItems: 'center',
        paddingLeft: '2rem',
        background: '#e1f1fd',
        borderRadius: '15px'
       }}>
      
        <Box p={1} width='640px'>
           <Grid container spacing={1} paddingTop='2rem'>
               <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                  <Typography paddingTop='1rem' >Institution</Typography>
                  <Typography>{institution}</Typography>
               </Grid>
               <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                   <Typography paddingTop='1rem' >Major</Typography>
                   <Typography>{major}</Typography>
               </Grid>
               <Grid sx={{ padding: '1rem' }} item xs={6} md={15}>
                   <Typography paddingTop='1rem' >Degree</Typography>
                   <Typography>{degree}</Typography>
               </Grid>
               <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                   <Typography>From</Typography>
                       {from}
                </Grid>
                <Grid sx={{ padding: '1rem' }} item xs={6} md={6}>
                    <Typography>To</Typography>
                        {to}
                </Grid>
               <Grid sx={{ padding: '1rem' }} item xs={6} md={15}>
               <Typography paddingTop='1rem' >
                 Description
               </Typography>
               <Typography paddingTop='1rem' >
                 {description}
               </Typography>
               <Box paddingTop='20px'>
               <Button onClick={() => handelClick(id)} variant="contained" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                </Box>
               </Grid>
           </Grid>
        </Box>
        
       </Card>
       </Grow>   
  )
}

export default EduDecCard