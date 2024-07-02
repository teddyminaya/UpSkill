import React from 'react'
import { BottomNavigation } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';
import HomeIcon  from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SearchIcon  from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const Footer = () => {
  return (
    <>
    <BottomNavigation
  showLabels
//   value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
>
  <BottomNavigationAction label="Home" icon={<HomeIcon />} />
  <BottomNavigationAction label="Explore" icon={<SearchIcon />} />
  <BottomNavigationAction label="My Plan" icon={<CalendarMonthIcon />} />
  <BottomNavigationAction label="Profile" icon={<AccountBoxIcon />} />
</BottomNavigation>
    </>
  )
}

export default Footer


