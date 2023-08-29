import React, { useEffect, useState } from 'react'
import EduDecCard from './EduDecCard'
import { Box, Button, Card, Collapse, Dialog, Divider, Fade, Grid, Grow, Typography, Zoom } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EduCard from './EduCard';
import PropTypes from 'prop-types';
import axios, { CanceledError } from 'axios';

interface EduProps{
  id: string,
  Institution: string,
  Major:string,
  Degree: string,
  From: string,
  To: string,
  Description: string
}

    function SimpleDialog(props: { onClose: any; selectedValue: any; open: any; }) {
        const { onClose, selectedValue, open } = props;
      
        const handleClose = () => {
          onClose(selectedValue);
        };
      
        return (
          <Dialog 
          sx={{
            backdropFilter: "blur(2px) sepia(5%)",
          }}
          onClose={handleClose} open={open} maxWidth='xl' scroll='body' TransitionComponent={Fade}>
            <EduCard handelClick={handleClose}/>
          </Dialog>
        
        );
      }
      
      SimpleDialog.propTypes = {
        onClose: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired,
        selectedValue: PropTypes.string.isRequired
      };

function Education() {
    const [education, setEducation] = useState<EduProps[]>([]);
    const [error, setError] = useState('');

    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    }; 

    useEffect(() => {
      const controller = new AbortController();
  
      axios
        .get<EduProps[]>('http://localhost:5000/api/education')
        .then((res) => setEducation(res.data))
        .catch(err => {
          if(err instanceof CanceledError) return;
          setError(err.message)
        });
        return () => controller.abort();
    }, [])

  return (
    <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 700 } : {})}> 
          <Card sx={{width: '1300px', borderRadius: '15px'}}>
            <Box p={5} >
                <Typography
                sx={{
                    pb: 3
                }}
                variant="h4"
                >
                 Education Qualifications
                </Typography>
                <Box paddingBottom='1rem'>
                    <Button onClick={handleClickOpen} variant="outlined" startIcon={<AddCircleOutlineIcon />}>
                        Add new
                    </Button>
                </Box>
                <Grid container spacing={3}>
                
                {education.map((edu) => (
                    <Grid key={edu.id} item xs={12} md={4} lg={6}>
                    <EduDecCard
                        id={edu.id}
                        institution={edu.Institution}
                        major={edu.Major}
                        degree={edu.Degree}
                        description={edu.Description}
                        to={edu.To}
                        from={edu.From}
                    />
                    </Grid>
                    ))}

                </Grid>
                <SimpleDialog
                open={open}
                onClose={handleClose} selectedValue={''}                />
                </Box>
            </Card>
    </Grow>        
  )
}

export default Education