import React from "react";
import NavButton from "./NavButton.jsx";
import SearchBar from "./SearchBar.jsx";
import TweetButton from "./TweetButton.jsx";


function Header(){
  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
  return (
    <div style={headerStyles}>
      <NavButton name="Home"/>
      <NavButton name="Notifications"/>
      <NavButton name="Messages"/>
      <SearchBar/>
      <TweetButton/>
    </div>
  );
}


export default Header;
