import { useEffect, useState } from 'react'
import EduDecCard from './EduDecCard'
import { Box, Button, Card,Dialog, Fade, Grid, Grow, Typography } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EduCard from './EduCard';
import PropTypes from 'prop-types';
import axios, { CanceledError } from 'axios';
import { useAuth } from '../../context/AuthContext';

interface EduProps{
  _id: string,
  Institution: string,
  Major:string,
  Degree: string,
  from: string,
  to: string,
  Description: string
}
const baseUrl = import.meta.env.VITE_API_BASE_URL;

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
    const {user} = useAuth();
    const [education, setEducation] = useState<EduProps[]>([]);
    const [error, setError] = useState('');

    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    }; 
    
    const handelDelete = (id: string) => {
      const originalWork = [...education];
      setEducation(education.filter(u => u._id !== id));

      axios.delete(`${baseUrl}/api/education/${id}` )
      .catch(err => {
        setError(err.message);
        setEducation(originalWork)
      })
    }

    useEffect(() => {
      const controller = new AbortController();
  
      axios
        .post<EduProps[]>(`${baseUrl}/api/education/${user._id}`)
        .then((res) => setEducation(res.data))
        .catch(err => {
          if(err instanceof CanceledError) return;
          setError(err.message)
        });
        return () => controller.abort();
    }, [])
  console.log(error)
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
                    <Grid key={edu._id} item xs={12} md={4} lg={6}>
                    <EduDecCard
                        id={edu._id}
                        institution={edu.Institution}
                        major={edu.Major}
                        degree={edu.Degree}
                        description={edu.Description}
                        to={edu.to}
                        from={edu.from}
                        handelClick={handelDelete}
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