import { AppBar, Badge, Box, Button, IconButton, List, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import NavListComponent from './NavListComponent';

interface Props {
  user: string | undefined;
  handelClick: () => void;
  name: string | undefined;
}

function UserNavBar({ user, handelClick, name }: Props) {
  return (
    <Box sx={{ 
      width: '100vw',  // Full viewport width
      minWidth: '100%',
      overflowX: 'hidden',
    }}>
      <AppBar position="static" sx={{ bgcolor: '#1A5092' }}>
        <Toolbar 
          sx={{ 
            width: '100%',
            maxWidth: '2000px',
            margin: '0 auto',
            padding: { xs: '0.5rem 1rem', md: '0.5rem 2rem' },
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            gap: { xs: 1, sm: 2 }
          }}
        >
          {/* Left Section */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: { xs: '0.5rem', sm: '1rem' },
            flex: { xs: 1, sm: 'unset' }
          }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ 
                fontFamily: '-apple-system', 
                fontStyle: 'italic', 
                fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                whiteSpace: 'nowrap'
              }}
            >
              CarrierCompass
            </Typography>
            <Box sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              gap: '1rem',
              ml: 2
            }}>
              {user && (
                <NavListComponent to="user" name="Dashboard" />
              )}
              {!user && (
                <>
                  <NavListComponent to="reg" name="Register" />
                  <NavListComponent to="login" name="Login" />
                </>
              )}
            </Box>
          </Box>

          {/* Middle Section */}
          {user && (
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ 
                fontFamily: '-apple-system', 
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                display: { xs: 'none', md: 'block' },
                whiteSpace: 'nowrap',
                px: 2
              }}
            >
              Welcome Back, {name}
            </Typography>
          )}

          {/* Right Section */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: { xs: '0.25rem', sm: '0.5rem', md: '1rem' },
            ml: 'auto'
          }}>
            {user && (
              <>
                <Button 
                  onClick={handelClick} 
                  sx={{ 
                    color: 'white', 
                    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                    display: { xs: 'none', sm: 'block' }
                  }}
                >
                  Logout
                </Button>
                <IconButton 
                  size="small" 
                  aria-label="show 4 new mails" 
                  color="inherit"
                  sx={{ display: { xs: 'none', sm: 'flex' } }}
                >
                  <Badge badgeContent={3} color="error">
                    <MailIcon sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' } }} />
                  </Badge>
                </IconButton>
                <IconButton 
                  size="small" 
                  color="inherit"
                  sx={{ display: { xs: 'none', sm: 'flex' } }}
                >
                  <Badge badgeContent={17} color="error">
                    <NotificationsNoneIcon sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' } }} />
                  </Badge>
                </IconButton>
                <IconButton 
                  size="small" 
                  edge="end" 
                  color="inherit"
                  sx={{ display: { xs: 'none', sm: 'flex' } }}
                >
                  <AccountCircle sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' } }} />
                </IconButton>
              </>
            )}
            <IconButton 
              size="small" 
              color="inherit"
              sx={{ 
                display: { xs: 'flex', sm: 'none' },
                ml: 'auto'
              }}
            >
              <MoreIcon sx={{ fontSize: '1.5rem' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default UserNavBar;