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
function SideBar() {
  return (
     <Box paddingLeft='0.5rem'>
        <Grow in={true} {...(true ? { timeout: 1000 } : {})} style={{ transformOrigin: '0 0 0' }}>
    <List
    sx={{ paddingLeft: '1rem', borderRadius: '18px' ,width: '260px', height: '800px', bgcolor: '#5A96E3', color: 'black' }}
    aria-label="contacts"
  >
        <Typography paddingTop='2rem' paddingBottom='1rem'>
                DASHBOARDS
        </Typography>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <MmsTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary="Messenger" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton>
            <ListItemIcon>
            <DisplaySettingsTwoToneIcon />
            </ListItemIcon>
        <ListItemText primary="Jobs" />
      </ListItemButton>
    </ListItem>
        <Typography paddingTop='2rem' paddingBottom='1rem'>
                QUALIFICATION
        </Typography>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
        <TableChartTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary="Educational" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
         <TableChartTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary="Work Experience" />
      </ListItemButton>
    </ListItem>
  </List>
        </Grow>
    </Box>
  )
}

export default SideBar