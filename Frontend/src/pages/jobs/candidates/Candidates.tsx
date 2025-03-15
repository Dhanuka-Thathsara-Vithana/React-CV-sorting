import {
    Card,
    Box,
    Grid,
    Typography,
    Grow
  } from '@mui/material';
  import CandiCard from './CandiCard';
  import { useEffect, useState } from 'react';
  import axios, { CanceledError } from 'axios';
  import { useNavigate } from 'react-router-dom';
  
  interface CandiProps {
    _id: number,
    fName: string,
    lName: string,
    field: string,
    age: number
  }
  
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  function Candidates() {
    const navigate = useNavigate();
    const [candiCard, setCandiCard] = useState<CandiProps[]>([]);
    const [error, setError] = useState('');
  
    useEffect(() => {
        const savedId = localStorage.getItem('jobCardId');
        if(savedId) { const id = JSON.parse(savedId); 
        console.log(id)
       
       const controller = new AbortController();
        const dataId = {id}
        console.log(dataId)
       axios
         .post<CandiProps[]>(`${baseUrl}/api/application/id`, dataId)
         .then((res) => {
         setCandiCard(res.data)
         console.log(res.data)
         })
         .catch(err => {
           if(err instanceof CanceledError) return;
           setError(err.message)
         });
         return () => controller.abort();
       }
     }, [])
    
  console.log(candiCard)
  console.log(error)
  
  const handelIdView = (id: number) => {
    localStorage.setItem('candiCardId', JSON.stringify(id));
    navigate('/com/jobDec')
     console.log(id)
   }

   const handelIdCV = (id: number) => {
    localStorage.setItem('ComcandiCardId', JSON.stringify(id));
    navigate('/com/jobDec')
     console.log(id)
   }
  
    return (
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 700 } : {})}>   
      <Card sx={{width: '1300px', paddingLeft: '4rem', borderRadius: '15px'}}>
      <Box p={5} paddingTop='3rem'>
          <Typography
            sx={{
              pb: 3
            }}
            variant="h4"
          >
            Applied Candidates
          </Typography>
             
          <Grid container spacing={2}>
           
             {candiCard.map((Candi) => (
               <Grid key={Candi._id} item xs={12} md={4} lg={12}>
                 <CandiCard
                    id={Candi._id}
                    fName={Candi.fName}
                    lName={Candi.lName}
                    field={Candi.field}
                    age={Candi.age}
                    handelClickView={handelIdView}
                    handelClickCV={handelIdCV}
                 />
              </Grid>
              ))}
  
          </Grid>
  
          </Box>
         
      </Card>
      </Grow>
    )
  }
  
  export default Candidates