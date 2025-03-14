import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { Button, Grid, Grow } from '@mui/material';

interface Props {
   id: number,
  image: string,
  title: string,
  subheader: string,
  des1: string,
  des2: string
  handelClickView: (id: number) => void
  handelClickCandi: (id: number) => void
}

export default function ComJobCard({id, image, title, subheader, des1, des2, handelClickView, handelClickCandi}: Props) {

  return (
    <Grow in={true} {...(true ? { timeout: 1000 } : {})} style={{ transformOrigin: '0 0 0' }} >   
    <Card sx={{ width: '350px', height: '460px' , borderRadius: '12px', bgcolor: '#cae5fa'  }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            S
          </Avatar>
        }
        title={title}
        subheader={subheader}
      />
      <Card
      raised
      sx={{
        maxWidth: 350,
        height: 250
      }}
    >
      <CardMedia
        component="img"
        height="184"
        image={image}
        alt="img1"
      />
    </Card>
      
      <CardContent>
    <Typography variant="body2" color="text.secondary">
        {des1}
    </Typography>
    <Typography variant="body2" color="text.secondary">
        {des2}
    </Typography>
</CardContent>
    <CardActions disableSpacing>
      <Grid paddingLeft={1.5} container spacing={2.5}>
          <Grid item alignContent='end'>
            <Button
              
             onClick={() => handelClickView(id)}
             sx={{
              bgcolor: '#09bd0c'+ ' !important', 
                '&:hover': {
                    backgroundColor: '#4EF037',
                    opacity: [0.9, 0.8, 0.7]
                  },
                color: 'white', width: '120px' }}>View More</Button>
          </Grid>
          <Grid item alignContent='end'>
            <Button
              
             onClick={() => handelClickCandi(id)}
             sx={{
              bgcolor: '#09bd0c'+ ' !important', 
                '&:hover': {
                    backgroundColor: '#4EF037',
                    opacity: [0.9, 0.8, 0.7]
                  },
                color: 'white', width: '160px' }}>View Candidates</Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
    </Grow>
  );
}
