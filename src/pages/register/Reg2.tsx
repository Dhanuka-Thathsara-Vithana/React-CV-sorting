import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import regBack from './assets/Registration.png'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CardComponent from '../education/CardComponent';

const styles = {
    paperContainer: {
        backgroundImage: `url(${regBack})`
    }
};

function Reg2() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({ resolver: zodResolver(schema)});
    const onSubmit = (data: FieldValues) => {
    // Save form data to localStorage whenever it changes
        localStorage.setItem('formData1', JSON.stringify(data));
    console.log(data)
    navigate('/reg3') 
    }
  return (
<Paper style={styles.paperContainer}>
    <Grid height='60.8rem' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={6}>
       <Box paddingLeft='23rem' paddingTop='26rem'>
           <Typography
            color='white'
            component="div"
            sx={{ paddingLeft: '7rem',fontFamily: '-apple-system', fontStyle: 'italic', fontSize: '35px' ,display: { xs: 'none', sm: 'block' } }}
            >
            Let’s Register!
            </Typography> 
           <Typography
            color='white'
            component="div"
            sx={{ paddingLeft: '2.8rem',fontFamily: '-apple-system', fontStyle: 'italic', fontSize: '55px' ,display: { xs: 'none', sm: 'block' } }}
            >
            CarrierCompass
            </Typography>
            <Typography color='white' sx={{paddingTop: '1rem', fontSize: '20px'}}>
            Log in to apply for jobs and check your resume status
            </Typography>
       </Box>
    </Grid>
    <Grid item xs={6}>
    <form onSubmit={handleSubmit(onSubmit)}>
        <Box paddingLeft='6rem'  paddingTop='19rem' width='40rem'>
           <Typography
           sx={{ paddingLeft: '9rem',fontFamily: '-apple-system', fontSize: '40px' ,display: { xs: 'none', sm: 'block' } }}
           >
           Let’s Register
           </Typography>  
           <Box paddingTop='1.5rem'>
                <Grid container spacing={2} paddingTop='2rem'>
                    <CardComponent Md={15} label={'First Name'} objRef={register('fName')}/>
                    <CardComponent Md={15} label={'Last Name'} objRef={register('lName')}/>
                    <CardComponent Md={15} label={'Email Name'} objRef={register('email')}/>
                    <CardComponent Md={15} label={'Telephone'} objRef={register('telephone')}/>
                </Grid>    
           </Box>
          
           <Box paddingTop='1.8rem' width='33rem'>
                <Button endIcon={<PersonAddAltIcon />} sx={{height: '2.8rem', borderRadius: '12px'}} variant="outlined" fullWidth >Submit</Button>
           </Box>
        </Box> 
    </form>     
    </Grid>
   
  </Grid>
</Paper>  
  )
}

export default Reg2