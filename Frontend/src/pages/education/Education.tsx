import { useState } from 'react';
import EduDecCard from './EduDecCard';
import { Box, Button, Card, Dialog, Fade, Grid, Grow, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EduCard from './EduCard';
import PropTypes from 'prop-types';
import { useAuth } from '../../context/AuthContext';
import { useEducation, useEduDelete } from '../../services/EducationService';
import Swal from 'sweetalert2';

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
        <EduCard handelClick={handleClose}  />
      </Dialog>
    );
  }
  
  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired
  };

function Education() {
    const { user } = useAuth();
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const deleteEduMutation = useEduDelete(user._id);
    
    const handleDelete = (id: string) => {
      Swal.fire({
          title: "Are you sure?",
          text: "This action cannot be undone!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
      }).then((result) => {
          if (result.isConfirmed) {
              deleteEduMutation.mutate(id, {
                  onSuccess: () => {
                      Swal.fire({
                          title: "Deleted!",
                          text: "Education entry has been deleted.",
                          icon: "success",
                      });
                  },
                  onError: (error) => {
                      console.error("Error deleting education:", error);
                      Swal.fire({
                          title: "Error",
                          text: "Failed to delete education. Please try again.",
                          icon: "error",
                      });
                  },
              });
          }
      });
  };

    const { data: education } = useEducation(user._id);
  
    return (
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 700 } : {})}> 
        <Card sx={{ width: '1300px', borderRadius: '15px' }}>
          <Box p={5}>
            <Typography sx={{ pb: 3 }} variant="h4">
              Education Qualifications
            </Typography>
            <Box paddingBottom='1rem'>
              <Button onClick={handleClickOpen} variant="outlined" startIcon={<AddCircleOutlineIcon />}>
                Add new
              </Button>
            </Box>
            <Grid container spacing={3}>
              {education?.map((edu) => (
                <Grid key={edu._id} item xs={12} md={4} lg={6}>
                  <EduDecCard
                    id={edu._id || ''}
                    institution={edu.Institution}
                    major={edu.Major}
                    degree={edu.Degree}
                    description={edu.Description}
                    to={edu.to || ''}
                    from={edu.from}
                    handelClick={handleDelete}
                  />
                </Grid>
              ))}
            </Grid>
            <SimpleDialog open={open} onClose={handleClose} selectedValue={''} />
          </Box>
        </Card>
      </Grow>        
    );
}

export default Education;
