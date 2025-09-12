import React from "react";
import "./Header.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const Header = () => {
  return (
    <header className="header">
      {/* Left side */}
      <div className="header-left">
        <span className="logo">Netflix</span>
        <ul className="nav-links">
          <li>
            <a href="#">Netflix</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">TV Shows</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">Latest</a>
          </li>
          <li>
            <a href="#">My List</a>
          </li>
          <li className="browse">
            <a href="#">Browse by Languages</a>
          </li>
        </ul>
      </div>

      {/* Right side */}
      <ul className="header-right">
        <li>
          <SearchIcon className="icon" />
        </li>
        <li>
          <NotificationsNoneIcon className="icon" />
        </li>
        <li className="account-dropdown">
          <AccountBoxIcon className="avatar" />
          <ArrowDropDownIcon className="icon" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
