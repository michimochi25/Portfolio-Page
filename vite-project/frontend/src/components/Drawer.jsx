import { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ModeSwitch from './ModeSwitch';

function TopDrawer({ currPage, setCurrPage, isDarkMode, setDarkMode }) {
  const dict = ['About me', 'Projects', 'Posts', 'Resources', 'Socials', 'Click me!'];
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setCurrPage(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='w-screen text-center top-0'>
      <List
        component="nav"
        aria-label="Menu"
        sx={
          isDarkMode
            ? { bgcolor: '#0F1020', color: '#EFC3F5', display: 'flex' }
            : { bgcolor: '#2F195F', color: '#EFC3F5', display: 'flex' }
        }
      >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary={dict[currPage]}
          />
        </ListItemButton>
        <ModeSwitch isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {dict.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === currPage}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div >
  )
}

export default TopDrawer;