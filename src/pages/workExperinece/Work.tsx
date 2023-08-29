import React, { useEffect, useState } from 'react'
import WorkDecCard from './WorkDecCard'
import { Box, Button, Card, Dialog, Fade, Grid, Grow, Typography } from '@mui/material';
import WorkCard from './WorkCard';
import PropTypes from 'prop-types';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import axios, { CanceledError } from 'axios';


interface WorkProps{
   Description: string;
   _id: string,
   Title: string,
   Company: string,
   OfficeLocation: string,
   From: string,
   To: string
}

    function SimpleDialog(props) {
        const { onClose, selectedValue, open } = props;
      
        const handleClose = () => {
          onClose(selectedValue);
        };
      
        return (
          <Dialog
          sx={{
            backdropFilter: "blur(2px) sepia(5%)",
          }}
          onClose={handleClose} open={open} maxWidth='xl' scroll='body'  TransitionComponent={Fade}>
            <WorkCard handelClick={handleClose}/>
          </Dialog>
        );
      }
      
      SimpleDialog.propTypes = {
        onClose: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired,
        selectedValue: PropTypes.string.isRequired
      };

function Work() {
    const [works, setWorks] = useState<WorkProps[]>([]);
    const [error, setError] = useState('');
 
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    }; 
     
    const handelDelete = (id: string) => {
      const originalWork = [...works];
      setWorks(works.filter(u => u._id !== id));

      axios.delete(`http://localhost:5000/api/work/${id}`)
      .catch(err => {
        setError(err.message);
        setWorks(originalWork)
      })
    }

    useEffect(() => {
      const controller = new AbortController();
  
      axios
        .get<WorkProps[]>('http://localhost:5000/api/work')
        .then((res) => setWorks(res.data))
        .catch(err => {
          if(err instanceof CanceledError) return;
          setError(err.message)
        });
        return () => controller.abort();
    }, [])

  return (
    <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 700 } : {})}> 
      <Card sx={{width: '1300px', borderRadius: '15px'}}>
      <Box p={5}>
          <Typography
          sx={{
              pb: 3
          }}
          variant="h4"
          >
            Work Experience
          </Typography>
          <Box paddingBottom='1rem'>
              <Button onClick={handleClickOpen} variant="outlined" startIcon={<AddCircleOutlineIcon />}>
                  Add new
              </Button>
          </Box>
          <Grid container spacing={3}>
          
          {works.map((works) => (
              <Grid key={works._id} item xs={12} md={4} lg={6}>
              <WorkDecCard 
                  id={works._id}
                  title={works.Title}
                  company={works.Company}
                  officeLocation={works.OfficeLocation}
                  description={works.Description}
                  to={works.To}
                  from={works.From}
                  handelClick={handelDelete}
                  />
              </Grid>
              ))}

          </Grid>
          <SimpleDialog
            open={open}
            onClose={handleClose} selectedValue={''}        />
          </Box>
      </Card>
    </Grow>
  )
}

export default Work