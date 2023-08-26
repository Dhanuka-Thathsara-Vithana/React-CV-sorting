import { AppBar, Badge, Box, Button, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function NavBar() {
  return (
    <Box borderRadius='18'  paddingLeft='1rem' sx={{ width: '1840px' }}>
    <AppBar position="static" sx={{bgcolor: '#19A7CE'}}>
      <Toolbar>
        <Typography
          component="div"
          sx={{ fontFamily: '-apple-system', fontStyle: 'italic', fontSize: '25px' ,display: { xs: 'none', sm: 'block' } }}
        >
          CarrierCompass
        </Typography>
        <Box paddingLeft='7rem'>
        <List disablePadding component={Box} display="flex">  
        <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
          >
            <ListItemText
            sx={{fontFamily:'sans-serif'}}
              primaryTypographyProps={{ noWrap: true }}
              primary="Home"
            />
        </ListItem>
        <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Dashboard"
            />
        </ListItem>
        <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Help"
            />
        </ListItem>
        </List>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={3} color="primary">
              <MailIcon sx={{ fontSize: 32 }} color="action" />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            color="inherit"
          >
            <Badge badgeContent={17} color="primary">
               <NotificationsNoneIcon sx={{ fontSize: 32 }} color="action" />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
          >
            <AccountCircle sx={{ fontSize: 32 }}/>
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
   
  </Box>
  )
}

export default NavBar