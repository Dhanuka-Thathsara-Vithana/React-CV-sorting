
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
import { MouseEventHandler } from 'react';
import { Link, Navigate } from 'react-router-dom';

interface Props {
    message: string,
    icon: JSX.Element,
    link: string
}



function ListItemCom({message,icon,link }: Props) {
  return (
   <ListItem disablePadding>
      <ListItemButton  >
          <ListItemIcon>
            {icon}
        </ListItemIcon>
        <ListItemText primary={message} />
      </ListItemButton>
    </ListItem>
  )
}

export default ListItemCom