import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone';
import { TextField, TextareaAutosize, Typography } from '@mui/material'
import {Box, Grow} from '@mui/material';
import Divider from '@mui/material/Divider';
import ListItemCom from './ListItem';

function SideBar() {
  return (
     <Box paddingLeft='0.5rem' paddingTop='1rem'>
        <Grow in={true} {...(true ? { timeout: 600 } : {})} style={{ transformOrigin: '0 0 0' }}>
    <List
    sx={{ paddingTop: '2rem', paddingLeft: '1rem', borderRadius: '18px' ,width: '260px', height: '800px', bgcolor: '#009BD6', color: 'white' }}
    aria-label="contacts"
  >
        <Typography  color='#A4EBF3' variant="subtitle1" paddingTop='2rem' paddingBottom='1rem'>
                DASHBOARDS
        </Typography>
      <ListItemCom message='Dashboard' icon={ < StarIcon sx={{ color: '#A4EBF3'}} />} /> 
      <ListItemCom message='Messenger' icon={ <MmsTwoToneIcon sx={{ color: '#A4EBF3'}} />} /> 
      <ListItemCom message='Jobs' icon={ <DisplaySettingsTwoToneIcon sx={{ color: '#A4EBF3'}} />} /> 

       <Divider/>
        <Typography  color='#A4EBF3' variant="subtitle1" paddingTop='2rem' paddingBottom='1rem'>
                QUALIFICATION
        </Typography>
        <ListItemCom message='Educational' icon={<TableChartTwoToneIcon sx={{ color: '#A4EBF3'}} />}/> 
        <ListItemCom message='Work Experience' icon={<TableChartTwoToneIcon sx={{ color: '#A4EBF3'}} />}/> 

  </List>
        </Grow>
    </Box>
  )
}

export default SideBar