import React, { useState } from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import TelegramIcon from "@mui/icons-material/Telegram";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import MenuIcon from "@mui/icons-material/Menu";

function Sidenav() {
  const [iconShow, setIconShow] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [homeIconSelected, setHomeIconSelected] = useState(true);
  const [searchIconSelected, setSearchIconSelected] = useState(false);
  const [exploreIconSelected, setExploreIconSelected] = useState(true);
  const [reelsIconSelected, setReelsIconsSelected] = useState(true);
  const [messagesIconSelected, setMessagesIconSelected] = useState(false);
  const [notificationsIconSelected, setNotificationsIconSelected] =
    useState(true);
  const [createIconSelected, setCreateIconSelected] = useState(true);
  const [moreIconSelected, setMoreIconSelected] = useState(true);

  const handleHomeClick = () => {
    // HomeOutlinedIcon 클릭 시 HomeIcon으로 변경(home은 특별히 true가 filledIcon)
    setHomeIconSelected(true);
    // 다른 Icons를 Outlined으로 변경
    setSearchIconSelected(false);
    setExploreIconSelected(true);
    setReelsIconsSelected(true);
    setMessagesIconSelected(false);
    setNotificationsIconSelected(true);
    setCollapsed(false);
    setIconShow(true);
  };

  const handleSearchClick = () => {
    setHomeIconSelected(false);
    setExploreIconSelected(true);
    setReelsIconsSelected(true);
    setMessagesIconSelected(false);
    setNotificationsIconSelected(true);

    // Sidenav 영역 줄임
    setCollapsed(true);
    // Outlined 대신 border로 표시
    setSearchIconSelected(true);
    setIconShow(false);
  };

  const handleExploreClick = () => {
    setHomeIconSelected(false);
    setSearchIconSelected(false);
    // ExploreOutlinedIcon을 클릭했을 때 ExploreIcon으로 변경
    setExploreIconSelected(false);
    setReelsIconsSelected(true);
    setCollapsed(false);
    setMessagesIconSelected(false);
    setNotificationsIconSelected(true);
    setIconShow(true);
  };

  const handleReelsClick = () => {
    setHomeIconSelected(false);
    setSearchIconSelected(false);
    setExploreIconSelected(true);
    setCollapsed(false);
    setReelsIconsSelected(false);
    setMessagesIconSelected(false);
    setNotificationsIconSelected(true);
    setIconShow(true);
  };

  const handleMessagesClick = () => {
    setHomeIconSelected(false);
    setSearchIconSelected(false);
    setExploreIconSelected(true);
    setReelsIconsSelected(true);
    setMessagesIconSelected(true);
    setNotificationsIconSelected(true);
    setCollapsed(true);
    setIconShow(false);
  };

  const handleNotificationsClick = () => {
    setHomeIconSelected(false);
    setSearchIconSelected(false);
    setExploreIconSelected(true);
    setReelsIconsSelected(true);
    setMessagesIconSelected(false);
    setNotificationsIconSelected(false);
    setCollapsed(false);
    setIconShow(false);
  };

  const handleCreateClick = () => {};
  const handleMoreClick = () => {};

  return (
    <div className="sidenav">
      {iconShow ? (
        <img className="sidenav__logo" src="instagram_logo.png" alt="" />
      ) : (
        <img
          className="sidenav__logoIcon"
          src="instagram_logoIcon.png"
          alt=""
        />
      )}
      <div className={`sidenav__buttons ${collapsed ? "collapsed" : ""}`}>
        <button className="sidenav__button" onClick={handleHomeClick}>
          {homeIconSelected ? <HomeIcon /> : <HomeOutlinedIcon />}
          <span>Home</span>
        </button>
        <button
          className={`sidenav__button ${
            searchIconSelected ? "search-selected" : ""
          }`}
          onClick={handleSearchClick}
        >
          <SearchIcon />
          <span>Search</span>
        </button>
        <button className="sidenav__button" onClick={handleExploreClick}>
          {exploreIconSelected ? <ExploreOutlinedIcon /> : <ExploreIcon />}
          <span>Explore</span>
        </button>
        <button className="sidenav__button" onClick={handleReelsClick}>
          {reelsIconSelected ? <SlideshowIcon /> : <SmartDisplayIcon />}
          <span>Reels</span>
        </button>
        <button
          className={`sidenav__button ${
            messagesIconSelected ? "messages-selected" : ""
          }`}
          onClick={handleMessagesClick}
        >
          <TelegramIcon />
          <span>Messages</span>
        </button>
        <button className="sidenav__button" onClick={handleNotificationsClick}>
          {notificationsIconSelected ? (
            <FavoriteBorderIcon />
          ) : (
            <FavoriteIcon />
          )}
          <span>Notifications</span>
        </button>
        <button className="sidenav__button">
          <AddBoxOutlinedIcon />
          <span>Create</span>
        </button>
      </div>
      <div className={`sidenav__more ${collapsed ? "collapsed" : ""}`}>
        <button className="sidenav__button">
          <MenuIcon />
          <span>More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
