import { Box, Button, Card, CardMedia, Grow, Link, List, ListItem, ListItemText, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { FormatAlignRightRounded } from '@mui/icons-material';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { NavLink as RouterLink } from 'react-router-dom';

interface Props {
  img1: string,
  logo: string,
  position: string,
  comName: string,
  rating: number,
  reviews: number,
  company: string,
  aboutCom: string,
  location: string,
  dec2: string,
  duration: string,
  time: string,
  jobDec: string,
  Responsibilities: string,
  technology: object,
  qualifications: string,
  additionalInformation: string,
  id: string
}

function JobDecCard({img1, logo, position, comName, rating, reviews, company, aboutCom, location,
   dec2, duration, jobDec, Responsibilities, technology, qualifications, additionalInformation, id
}: Props) {
   
  const [user, setUser] = useState<string | undefined>('')

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, [])


  return (
    <Card
    sx={{
     alignItems: 'center',
     width: '70rem'
    }}
    
   >
    <Grow in={true} {...(true ? { timeout: 500 } : {})} style={{ transformOrigin: '0 0 0' }}>
     <Box p={1} width='1200px'>
          <Box sx={{
            borderRadius: '12px'
          }}>
           <img
            src={img1}
            style={{marginTop: '2rem', borderStartEndRadius: '10px', marginLeft: '2rem'}}
          /> 
          </Box>  
      <Box>
          <Box width='150px' 
          >
            <img
             src={logo}
             style={{ height: '55px', paddingLeft: '4rem', paddingTop: '25px'}}
            />
          </Box>
          <Box>
              <Typography variant='h4' sx={{ paddingLeft: '3rem', paddingTop: '2rem'}}>
                {position}
              </Typography>
              <Typography>
              <Box display="flex" alignItems="center" paddingTop='1rem' paddingLeft='3rem'> 
                {comName}  
                <Box ml={1}>
                  <StarIcon/>
                </Box>
                <Box ml={1}>
                  {rating}
                </Box>
                <Box ml={2}>
                  {reviews} reviews
                </Box>
              </Box>
              </Typography>
              <Typography>
              <Box display="flex" alignItems="center" paddingTop='1rem' paddingLeft='3rem'>  
                <Box ml={1}>
                <LocationOnIcon/> 
                </Box>
                <Box ml={2}>
                    {location}
                </Box>
              </Box>
              </Typography>
              <Typography>
              <Box display="flex" alignItems="center" paddingTop='1rem' paddingLeft='3rem'>  
                <Box ml={1}>
                <ApartmentIcon/>
                </Box>
                <Box ml={2}>
                {dec2}
                </Box>
              </Box>
              </Typography>
              <Typography>
              <Box display="flex" alignItems="center" paddingTop='1rem' paddingLeft='3rem' paddingBottom='15px'>  
                <Box ml={1}>
                <AccessAlarmIcon/>
                </Box>
                <Box ml={2}>
                 {duration}
                </Box>
              </Box>
              </Typography>
              <Typography variant='overline' paddingLeft='60px'>
                
              </Typography>
              <Typography paddingLeft='60px'>
              <Link href="#" color="inherit">
                More jobs from this company
              </Link> 
              </Typography>
             <Box paddingLeft='60px' paddingTop='40px'>
             {user.type==='user' && <Button
                disableRipple
                component={RouterLink}
                to="/user/jobApply"
                variant="contained"
                color="primary"
                startIcon={<NorthEastIcon />}
                sx={{
                  width: '120px',
                  height: '40px',
                  outline: 'false'
                }}
              >
               
                  Apply
              </Button>}
              </Box>  
              <Typography paddingTop='40px' paddingLeft='55px'>
                <h3>Company Description</h3> 
              </Typography>
              <Typography paddingLeft='55px'>
                <h3>About {company}</h3> 
              </Typography>
              <Box width='800px'>
              <Typography paddingLeft='55px'>
                 {aboutCom}
              </Typography>
              </Box>
              <Typography paddingLeft='55px'>
                <h3>Job Description</h3> 
              </Typography>
              <Box width='800px'>
              <Typography paddingLeft='55px'>
                 {jobDec}
              </Typography>
              </Box>
              <Typography paddingLeft='55px'>
                <h3>Responsibilities</h3> 
              </Typography>
              <Box paddingLeft='55px'>
                 <Typography>
                   {Responsibilities}
                 </Typography>
                <Typography variant="h6" gutterBottom>
                  Some of the technology we're using includes:
                </Typography>
                <List>
                   {/* {technology && technology?.map((list) => (
                    <ListItem >
                      <ListItemText primary={list} />
                    </ListItem>
                  ))}  */}
                  <ListItem>
                    <ListItemText primary="Ruby on Rails" />
                  </ListItem>
                </List>
              </Box>
              </Box>
              <Typography paddingLeft='55px'>
                <h3>Qualifications</h3> 
              </Typography>
              <Box width='800px'>
              <Typography paddingLeft='55px'>
              For this role, we have a very open mind in terms of specific work experience. If you have the right mindset and capabilities, then we strongly encourage you to apply. Here are some things we would regard highly:
              <br />
              <br />
              {qualifications}
              </Typography>
              </Box>
              <Typography paddingLeft='55px'>
                <h3>Additional Information</h3> 
              </Typography>
              <Box width='800px'>
              <Typography paddingLeft='55px'>
                  {additionalInformation}
              </Typography>
              </Box>
              <Box paddingTop='50px' paddingLeft='55px'>
              <Link href="#" color="inherit">
                Report This Ad
              </Link> 
              </Box>
      </Box>
     </Box>
     </Grow>
     </Card> 
  )
}

export default JobDecCard