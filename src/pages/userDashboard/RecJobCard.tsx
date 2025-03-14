import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, green} from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import { Button, Grid } from '@mui/material';
interface Props {
  image: string,
  title: string,
  subheader: string,
  rating: number,
  des1: string,
  des2: string
}

export default function RecJobCard({image, title, subheader, rating, des1, des2}: Props) {

  return (
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
      <CardMedia
        component="img"
        height="184"
        image={image}
        alt="img1"
      />
      <CardContent>
    <Typography variant="body2" color="text.secondary">
        {des1}
    </Typography>
    <Typography variant="body2" color="text.secondary">
        {des2}
    </Typography>
</CardContent>
    <CardActions disableSpacing>
      <Grid container spacing={2}>
         <Grid item>
        <Stack spacing={2}>
            <Rating name="read-only" value={rating} readOnly />
         </Stack>
         </Grid>
         <Grid item>
        <IconButton sx={{ bgcolor: green[100] }} aria-label="share">
          <ShareIcon />
        </IconButton>
          </Grid>
          <Grid item>
            <Button 
            sx={{ 
                borderRadius: '10px',
                bgcolor: '#09bd0c', 
                '&:hover': {
                    backgroundColor: '#fa0505',
                    opacity: [0.9, 0.8, 0.7]
                  },
                color: 'white', width: '120px' }}>View More</Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
