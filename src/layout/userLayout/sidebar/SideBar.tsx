import List from '@mui/material/List';
import StarIcon from '@mui/icons-material/Star';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone';
import { Typography } from '@mui/material'
import { Box, Grow } from '@mui/material';
import Divider from '@mui/material/Divider';
import ListItemCom from './ListItem';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function UserSideBar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box 
      paddingBottom='0.5rem' 
      bgcolor='black' 
      paddingLeft={isSmallScreen ? '0.5rem' : '1rem'} 
      sx={{
        opacity: '0.8', 
        boxShadow: 3,
        transition: 'all 0.3s ease'
      }}
    >
      <Grow in={true} {...(true ? { timeout: 600 } : {})} style={{ transformOrigin: '0 0 0' }}>
        <List
          sx={{ 
            paddingTop: '2rem', 
            paddingLeft: isSmallScreen ? '0.5rem' : '1rem', 
            borderRadius: '18px',
            width: isSmallScreen ? '4rem' : '15.2rem', 
            height: '42rem', 
            bgcolor: '#1A5092', 
            color: 'white',
            transition: 'all 0.3s ease'
          }}
          aria-label="contacts"
        >
          {!isSmallScreen && (
            <Typography color='#A4EBF3' variant="subtitle1" paddingTop='2rem' paddingBottom='1rem'>
              DASHBOARDS
            </Typography>
          )}
          
          <ListItemCom 
            message='Dashboard' 
            icon={<StarIcon sx={{ color: '#A4EBF3' }} />} 
            link={''} 
            showText={!isSmallScreen}
          />
          <ListItemCom 
            message='Messenger' 
            icon={<MmsTwoToneIcon sx={{ color: '#A4EBF3' }} />} 
            link={'messanger'} 
            showText={!isSmallScreen}
          />
          <ListItemCom 
            message='Jobs' 
            icon={<DisplaySettingsTwoToneIcon sx={{ color: '#A4EBF3' }} />} 
            link={'jobs'} 
            showText={!isSmallScreen}
          />

          {!isSmallScreen && <Divider />}
          
          {!isSmallScreen && (
            <Typography color='#A4EBF3' variant="subtitle1" paddingTop='2rem' paddingBottom='1rem'>
              QUALIFICATION
            </Typography>
          )}
          
          <ListItemCom 
            message='Educational' 
            icon={<TableChartTwoToneIcon sx={{ color: '#A4EBF3' }} />} 
            link={'education'} 
            showText={!isSmallScreen}
          />
          <ListItemCom 
            message='Work Experience' 
            icon={<TableChartTwoToneIcon sx={{ color: '#A4EBF3' }} />} 
            link={'workExperience'} 
            showText={!isSmallScreen}
          />
        </List>
      </Grow>
    </Box>
  );
}

export default UserSideBar;