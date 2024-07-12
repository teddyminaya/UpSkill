import React from "react";
import { BottomNavigation } from "@mui/material";
import { BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <BottomNavigation
        sx={{ bgcolor: "#424242" }}
        showLabels
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          to="/Home"
          label="Home"
          icon={<HomeIcon />}
          sx={{
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              color: "#90caf9",
            },
          }}
        />
        <BottomNavigationAction
          label="Explore"
          icon={<SearchIcon />}
          sx={{
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              color: "#90caf9",
            },
          }}
        />
        <BottomNavigationAction
          label="My Plan"
          icon={<CalendarMonthIcon />}
          sx={{
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              color: "#90caf9",
            },
          }}
        />
        <BottomNavigationAction
          label="Profile"
          icon={<AccountBoxIcon />}
          sx={{
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              color: "#90caf9",
            },
          }}
        />
      </BottomNavigation>
    </>
  );
};

export default Footer;
