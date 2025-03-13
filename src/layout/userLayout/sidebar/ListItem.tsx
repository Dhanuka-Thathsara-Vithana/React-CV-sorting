import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

interface Props {
  message: string;
  icon: JSX.Element;
  link: string;
  showText?: boolean;
}

function ListItemCom({ message, icon, link, showText = true }: Props) {
  const navigate = useNavigate();
  
  const handelClick = () => {
    navigate(`${link}`);
  };
  
  const button = (
    <ListItemButton 
      onClick={handelClick}
      sx={{ 
        minHeight: 48,
        justifyContent: showText ? 'initial' : 'center',
        px: showText ? 2.5 : 1,
      }}
    >
      <ListItemIcon sx={{ 
        minWidth: 0, 
        mr: showText ? 2 : 'auto',
        justifyContent: 'center',
      }}>
        {icon}
      </ListItemIcon>
      {showText && <ListItemText primary={message} />}
    </ListItemButton>
  );

  return (
    <ListItem disablePadding>
      {!showText ? (
        <Tooltip title={message} placement="right">
          {button}
        </Tooltip>
      ) : (
        button
      )}
    </ListItem>
  );
}

export default ListItemCom;