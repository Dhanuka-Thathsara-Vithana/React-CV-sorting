import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../context/AuthContext';
import regBack from './assets/Registration.png';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import InputComponent from '../education/InputComponent';


const schema = z.object({
  email: z.string().email('This is not a valid email.'),
  password: z.string().min(3)
});

type FormData = z.infer<typeof schema>;

const styles = {
  paperContainer: {
    backgroundImage: `url(${regBack})`
  }
};

function Reg2() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });
  const { login } = useAuth();

  const onSubmit = async (data: FormData) => {
    try {
      await login(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Paper style={styles.paperContainer}>
      <Grid container height='60.8rem'>
        <Grid item xs={6}>
          <Box paddingLeft='23rem' paddingTop='23rem'>
            <Typography color='white' sx={{ paddingLeft: '7rem', fontFamily: '-apple-system', fontStyle: 'italic', fontSize: '35px', display: { xs: 'none', sm: 'block' } }}>Let's Register!</Typography>
            <Typography color='white' sx={{ paddingTop: '1rem', paddingLeft: '2.8rem', fontFamily: '-apple-system', fontStyle: 'italic', fontSize: '55px', display: { xs: 'none', sm: 'block' } }}>CarrierCompass</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box paddingLeft='6rem' paddingTop='15rem' width='40rem'>
              <Typography sx={{ paddingLeft: '9rem', fontFamily: '-apple-system', fontSize: '38px', display: { xs: 'none', sm: 'block' } }}>Personal Details</Typography>
              <Box paddingTop='10rem'>
                <Grid container spacing={2}>
                  <InputComponent Md={15} label={'Email'} objRef={register('email')} error={errors.email?.message} />
                  <InputComponent Md={15} label={'Password'} objRef={register('password')} error={errors.password?.message} />
                </Grid>
              </Box>
              <Box paddingTop='1.8rem' width='33rem'>
                <Button type='submit' endIcon={<PersonAddAltIcon />} variant='outlined' fullWidth>Login</Button>
              </Box>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Reg2;