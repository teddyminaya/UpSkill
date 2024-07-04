import React from "react";
import { BottomNavigation } from "@mui/material";
import { BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Footer = () => {
  return (
    <>
      <BottomNavigation
        sx={{ bgcolor: '#424242' }}
        showLabels
        //   value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} sx={{color:'white'}} />
        <BottomNavigationAction label="Explore" icon={<SearchIcon />} sx={{color:'white'}} />
        <BottomNavigationAction label="My Plan" icon={<CalendarMonthIcon />} sx={{color:'white'}} />
        <BottomNavigationAction label="Profile" icon={<AccountBoxIcon />} sx={{color:'white'}} />
      </BottomNavigation>
    </>
  );
};

export default Footer;
